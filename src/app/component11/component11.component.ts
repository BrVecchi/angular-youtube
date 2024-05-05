import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { Person } from '../../model/Person';

@Component({
  selector: 'app-component11',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './component11.component.html',
  styleUrl: './component11.component.css',
})
export class Component11Component {
  //Objeto de formulário

  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    age: new FormControl(null, [
      Validators.required,
      Validators.min(0),
      Validators.max(120),
    ]),
    city: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  // Visibilidade dos botões
  btnRegister: boolean = true;

  // Vetor
  vector: Person[] = [];

  // Função de cadastro
  register() {
    // Cadastro no vetor
    this.vector.push(this.form.value as Person);

    // Limpeza dos inputs
    this.form.reset();

    // Visualização via console
    // console.table(this.vector);
  }
}
