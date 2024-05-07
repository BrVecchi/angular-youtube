import { Component } from '@angular/core';

import { Component15FormComponent } from '../component15-form/component15-form.component';
import { Component15TableComponent } from '../component15-table/component15-table.component';

@Component({
    selector: 'app-component15',
    standalone: true,
    templateUrl: './component15.component.html',
    styleUrl: './component15.component.css',
    imports: [Component15TableComponent, Component15FormComponent]
})
export class Component15Component {

  names: string[] = ['Ralf', 'Juliana', 'Maurício', 'Renata'];

  register (name: string){
  this.names.push(name)
  }
}
