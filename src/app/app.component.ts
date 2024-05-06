import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Component01Component } from './component01/component01.component';
import { Component02Component } from './component02/component02.component';
import { Component03Component } from './component03/component03.component';
import { Component04Component } from './component04/component04.component';
import { Component05Component } from './component05/component05.component';
import { Component06Component } from './component06/component06.component';
import { Component07Component } from './component07/component07.component';
import { Component08Component } from './component08/component08.component';
import { Component11Component } from './component11/component11.component';
import { Component12Component } from './component12/component12.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        RouterOutlet,
        Component01Component,
        Component02Component,
        Component03Component,
        Component04Component,
        Component05Component,
        Component06Component,
        Component07Component,
        Component08Component,
        Component11Component,
        Component12Component
    ]
})
export class AppComponent {
  title = 'angular-base';
}
