import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ModeloDTO } from 'src/app/models/modelo.dto';
import { ModeloService } from 'src/app/service/modelo.service';

@Component({
  selector: 'app-novo-modelo',
  templateUrl: './novo-modelo.page.html',
  styleUrls: ['./novo-modelo.page.scss'],
})
export class NovoModeloPage {
  public modeloId!: any;
  public titulo!: string;
  public modelo = new ModeloDTO();
  formGroup!: FormGroup;
  public inptFile: any;

  private modeloService = inject(ModeloService);
  private activatedRoute = inject(ActivatedRoute);

  constructor(private formBuilder: FormBuilder,
  ) {
    this.inicializarFormulario(this.modelo);
    this.modeloId = this.activatedRoute.snapshot.paramMap.get('id') as string;

    if (this.modeloId != null) {
      let editarModelo: ModeloDTO = this.modeloService.findById((Number(this.modeloId)));
      this.formGroup.setValue(editarModelo);
      this.titulo = "Editar modelo"
    } else {
      this.titulo = "Cadastra modelo"
    }
  }

  inicializarFormulario(modelo: ModeloDTO) {
    this.formGroup = this.formBuilder.group({
      id: [modelo.id, Validators.required],
      nome: [modelo.nome, Validators.required],
      modelo_id: [modelo.modelo_id],
    });
  }

  fileInputLogo(event: any): void {
    this.inptFile = event.currentTarget as HTMLInputElement;
    const file = event.target.files[0];
    if (file) {
      let caminho = URL.createObjectURL(file);
      this.formGroup.value.logo = caminho;
    }
  }
  adicionar() {
    if (this.formGroup.valid) {
      this.modeloService.adicionarModelo(this.formGroup.value);
      this.formGroup.value.logo = '';
      if (this.inptFile) {
        this.inptFile.value = ''
      }
      this.formGroup.reset();
    }
  }

}
