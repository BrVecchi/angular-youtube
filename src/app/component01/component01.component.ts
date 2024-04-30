import { Component } from '@angular/core';

@Component({
  selector: 'app-component01',
  standalone: true,
  imports: [],
  templateUrl: './component01.component.html',
  styleUrl: './component01.component.css',
})
export class Component01Component {
  // Variáveis
  name: string = 'Bruno';
  age: number = 33;
}
