import { Component, OnInit, inject } from '@angular/core';
import { MarcaService } from './marca.service';
import { MarcaDTO } from 'src/app/models/marca.dto';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-marca',
  templateUrl: './marca.page.html',
  styleUrls: ['./marca.page.scss'],
})
export class MarcaPage {
  public marcaNew!: string;
  marcas: MarcaDTO[] = [];
  novaMarca!: MarcaDTO;

  private marcaService = inject(MarcaService);
  private activatedRoute = inject(ActivatedRoute)

  constructor(private router: Router,) {
    this.marcas = this.marcaService.getCategorias();  
  }

  adicionarMarca(): void {
    this.router.navigate(['nova-marca']);
  }
  
  itemClick(marca: any) {   
   if(marca)
   this.router.navigate(['cadastro/marca/' + marca.id]);

  }

}
