import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-caixinha',
  templateUrl: './caixinha.component.html',
  styleUrls: ['./caixinha.component.css']
})
export class CaixinhaComponent implements OnInit {
  @Input() nomeProduto: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
