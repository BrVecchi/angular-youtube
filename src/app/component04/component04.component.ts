import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-component04',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component04.component.html',
  styleUrl: './component04.component.css',
})
export class Component04Component {
  // Variaável para exibir ou ocultar o quadrado
  exibir: boolean = true;

  //Função para exibir ou ucultar o quadrado
  action() {
    if (this.exibir === true) {
      this.exibir = false;
    } else {
      this.exibir = true;
    }
  }
}
