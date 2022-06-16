import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/interface/produto';

@Component({
  selector: 'app-catalago',
  templateUrl: './catalago.component.html',
  styleUrls: ['./catalago.component.css']
})
export class CatalagoComponent implements OnInit {
  url="http://lucasreno.kinghost.net/loja/ultimos-produtos";
  produtos: Produto[] = [];
  constructor(private http: HttpClient) { 
    this.pegarDados();
  }

  pegarDados(){
    this.http.get<Produto[]>(this.url).subscribe(
      resposta => {
        this.produtos = resposta;
      }
    )
  }

  ngOnInit(): void {
  }

}
