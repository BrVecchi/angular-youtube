import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-component08',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component08.component.html',
  styleUrl: './component08.component.css',
})
export class Component08Component {
  // Variável de média
  media: number = 4;

  // Vetor
  names: string[] = ['Ralf', 'Ana', 'Danilo', 'Camila'];

  // Linguagem

  language: string = 'HTML';
}
