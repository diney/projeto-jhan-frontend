import { Component, OnInit, inject } from '@angular/core';
import { MarcaService } from './marca.service';

@Component({
  selector: 'app-marca',
  templateUrl: './marca.page.html',
  styleUrls: ['./marca.page.scss'],
})
export class MarcaPage implements OnInit {

  

  private marcaService = inject(MarcaService);

  constructor() { }

  ngOnInit() {
    console.log(this.marcaService.this)

  }

}
