import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives',
  imports: [CommonModule, FormsModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {

  name = '';

  camposVisiveis = true;

  classeBotaoVerde = 'botao verde';

  classBotaoVermelho = 'botao vermelho';

  aplicarEstiloVerde = false;

  estilosParagrafos = {'font-style': 'italic', 'font-size': '29px'};

  camposButton = 'esconder campos';

  clientes = [
    {nome: 'Rafael'},
    {nome: 'Douglas'},
    {nome: 'João'},
    {nome: 'Daniel'}
  ];

  aplicarEstilo() {
    this.aplicarEstiloVerde = !this.aplicarEstiloVerde;
  }

  alterarParaMaiusculo($event: string) {
    this.name = $event.toUpperCase();
  }

  esconderCampos() {
    this.camposVisiveis = !this.camposVisiveis;

    if (this.camposVisiveis == true){
      this.camposButton = 'esconder campos';
    }
    else {
      this.camposButton = 'exibir campos';
    }
  }

}
