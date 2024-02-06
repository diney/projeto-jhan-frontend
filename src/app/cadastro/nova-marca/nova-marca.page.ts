import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MarcaService } from '../marca/marca.service';
import { MarcaDTO } from 'src/app/models/marca.dto';

@Component({
  selector: 'app-nova-marca',
  templateUrl: './nova-marca.page.html',
  styleUrls: ['./nova-marca.page.scss'],
})
export class NovaMarcaPage {

  public marcaId!: any;
  public titulo!: string;
  public marca = new MarcaDTO();

  formGroup!: FormGroup;

  private marcaService = inject(MarcaService);
  private activatedRoute = inject(ActivatedRoute);

  constructor(private formBuilder: FormBuilder) {

    this.inicializarFormulario(this.marca);
    this.marcaId = this.activatedRoute.snapshot.paramMap.get('id') as string;

    if (this.marcaId != null) {
      let editarMarca: MarcaDTO = this.marcaService.findById((Number(this.marcaId)));
      this.formGroup.setValue(editarMarca);
      this.titulo = "Editar marca"
    } else {
      this.titulo = "Cadastra marca"
    }
  }

  inicializarFormulario(marca: MarcaDTO) {
    this.formGroup = this.formBuilder.group({
      id: [marca.id],
      nome: [marca.nome, Validators.required],
      logo: [marca.logo],
    });
  }

  fileInputLogo(event: any): void {
    const file = event.target.files[0];
    let caminho = URL.createObjectURL(file);
    if (caminho) {
      this.formGroup.value.logo = caminho;
    }
  }

  adicionar() {
    if (this.formGroup.valid) {      
      this.marcaService.adicionarMarca(this.formGroup.value);
      this.formGroup.reset();     
    }
  }
  

}
