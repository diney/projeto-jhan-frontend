import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  rootPage: string = 'cadastro/marca';
  public appPages = [
    { title: 'Lista as marcas', component: 'cadastro/marca', icon: 'paper-plane' },
    { title: 'Cadastro/Edição', component: 'cadastro/nova-marca', icon: 'paper-plane' },
    { title: 'Lista os modelos', component: 'cadastro/modelo', icon: 'paper-plane' },
    { title: 'ModeloCadastro/Edição', component: 'cadastro/novo-modelo', icon: 'paper-plane' },
  ];

  constructor(private nav: NavController) { }

  openPage(page: { title: string, component: string }) {
    this.nav.navigateRoot(page.component);



  }

}
