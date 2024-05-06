import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { Person } from '../../model/Person';

@Component({
  selector: 'app-component11',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
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

  // Armazenar índice da pessoa selecionada
  index: number = -1;

  // Função de cadastro
  register() {
    // Cadastro no vetor
    this.vector.push(this.form.value as Person);

    // Limpeza dos inputs
    this.form.reset();

    // Visualização via console
    console.table(this.vector);
  }

  // Função de seleção
  select(index: number) {
    // Atribuir o índice da pessoa
    this.index = index;

    // Atribuir os dados da pessoa no formulário
    this.form.setValue({
      name: this.vector[index].name,
      age: this.vector[index].age,
      city: this.vector[index].city,
    });

    // Visibilidade dos botões
    this.btnRegister = false;
  }

  // Função alteração
  change() {
    // Alterar vetor
    this.vector[this.index] = this.form.value as Person;

    // Limpar os inputs
    this.form.reset();

    // Visibilidadde dos botões
    this.btnRegister = true;
  }

  // Função remover
  remove() {
    // Removendo pessoa do vetr
    this.vector.splice(this.index, 1);

    // Limpeza dos inputs
    this.form.reset();

    // Vizibilidade dos botões
    this.btnRegister = true;
  }

  // Função cancelar
  cancel() {
    this.form.reset();
    this.btnRegister = true;
  }
}
