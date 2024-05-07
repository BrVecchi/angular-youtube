import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { Product } from '../model/Product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-component13',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './component13.component.html',
  styleUrl: './component13.component.css'
})
export class Component13Component {

  vector: Product[] = [];

  btnRegister: boolean = true

  form = new FormGroup({
    id:    new FormControl(null),
    nome:  new FormControl(''),
    valor: new FormControl(null)
  })

  // Construtor
  constructor(private service: ProductService){}  

  // inicialização do componente
  ngOnInit(){
    this.select()
  }

  // Método de seleção de todos os produtos
  select(){
    this.service.selecionar()
    .subscribe(retorno => {this.vector = retorno});
  }

  // Método cadastrar produtos
  register(){
    this.service.cadastrar(this.form.value as Product)
    .subscribe(retorno => {
      this.vector.push(retorno);
      this.form.reset();
    });
  }

  // Método para selecionar um produto
  selectProduct(index: number){
    this.form.setValue({
      id: this.vector[index].id,
      nome: this.vector[index].nome,
      valor: this.vector[index].valor
    });

    this.btnRegister = false;
  }

  // Método para alterar produto
  change(){
    this.service.alterar(this.form.value as Product)
    .subscribe(()=>{
      // // obter o indice do objeto alterado
      // let indiceAlterado = this.vector.findIndex(obj => {
      //   return this.form.value.id === obj.id
      // });

      // // alterar o vetor
      // this.vector[indiceAlterado] = retorno;


      // Meu jeito de fazer
      this.select()

      this.form.reset();
      this.btnRegister = true;
    })
  }

  // Método para remoção de produtos
  remove(){
    this.service.remover(this.form.value.id)
    .subscribe(()=>{
      this.select()
      this.form.reset()
      this.btnRegister = true
    })
  }

  cancel(){
    this.form.reset()
    this.btnRegister = true
  }
}
