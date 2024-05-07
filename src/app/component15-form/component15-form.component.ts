import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-component15-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './component15-form.component.html',
  styleUrl: './component15-form.component.css'
})
export class Component15FormComponent {
  name:string = '';

  @Output() function = new EventEmitter<string>();

  registerName(){
    this.function.emit(this.name);
  }

}
