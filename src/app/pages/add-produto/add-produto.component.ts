import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { subscribeOn } from 'rxjs';
import { Categoria } from 'src/app/interface/categoria';

@Component({
  selector: 'app-add-produto',
  templateUrl: './add-produto.component.html',
  styleUrls: ['./add-produto.component.css']
})
export class AddProdutoComponent implements OnInit {
   categorias: Categoria[] = [];
   url ="http://lucasreno.kinghost.net/loja/categorias";
   urlPost = "http://lucasreno.kinghost.net/loja/produto";
   form: FormGroup;
   constructor(
    private http: HttpClient,
    private fb: FormBuilder // ajuda a validar as informações do formulario 
    ) { 
    this.pegarDados();
    this.form = fb.group({
      url: [''],
      categoria: 2,
      nome:[''],
      preco:[''],
      descricao:['']
    });
  }

  enviarDados(){
    console.log(this.form.value);
    this.http.post<any>(this.urlPost, this.form.value).subscribe(
      resposta => {
        console.log(resposta);
        this.form.reset(); //resetar formulario//
      },
      error => {
        console.log(error);
      }
    );
  }

  pegarDados(){
    this.http.get<Categoria[]>(this.url).subscribe(
      resposta => {
        this.categorias = resposta;
      }
    );
  }

  ngOnInit(): void {
  }

}
