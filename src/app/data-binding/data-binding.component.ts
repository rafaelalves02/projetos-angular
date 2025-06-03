import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  estilizarTitulo = false;

  botaoClass = {botao: true, verde: false, vermelho: true}
  //ou
  //botaoClass = ['botao', 'vermelho']
  //ou
  //botaoClass = 'botao vermelho';

  mensage = 'meu primeiro data binding!';

  imagePath = 'assets/@renato.webp';

  isDisabled = true;

  imageWidth = 300;

  arialabel = 'fechar';

  botaoFechar = `
    border: 1px solid;
    padding: 5px;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center
  `;

  nomeCliente = '';

  enableCloseButton(){
    this.isDisabled = !this.isDisabled;
  }

  AplicarEstiloTitulo() {
    this.estilizarTitulo = !this.estilizarTitulo

    this.botaoClass = {
      botao: true,
      verde: !this.botaoClass.verde,
      vermelho: !this.botaoClass.vermelho
    };

    //this.imageWidth += 10;
  }
}
