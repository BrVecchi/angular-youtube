import { Component } from '@angular/core';

@Component({
  selector: 'app-component03',
  standalone: true,
  imports: [],
  templateUrl: './component03.component.html',
  styleUrl: './component03.component.css',
})
export class Component03Component {
  // Varável de imagem
  image: string = 'assets/dia.jpg';

  //Função para alterar imagem
  changeImage() {
    if (this.image === 'assets/dia.jpg') {
      this.image = 'assets/noite.jpg';
    } else {
      this.image = 'assets/dia.jpg';
    }
  }
}
