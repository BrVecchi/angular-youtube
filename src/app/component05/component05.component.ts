import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-component05',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component05.component.html',
  styleUrl: './component05.component.css',
})
export class Component05Component {
  // Vetor de nomes
  names: string[] = ['Ariane', 'Bruna', 'Caio', 'Denis'];
}
