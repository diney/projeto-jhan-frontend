import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Cadstro de marca', url: '/marca', icon: 'mail' },
    { title: 'Cadstro de modelo', url: '/modelo', icon: 'paper-plane' },
       
   
  ];
  
  constructor() {}
}
