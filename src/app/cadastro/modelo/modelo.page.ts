import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloDTO } from 'src/app/models/modelo.dto';
import { ModeloService } from 'src/app/service/modelo.service';


@Component({
  selector: 'app-modelo',
  templateUrl: './modelo.page.html',
  styleUrls: ['./modelo.page.scss'],
})
export class ModeloPage {
  formGroup!: FormGroup;
  public modelo = new ModeloDTO();
  modelos: ModeloDTO[] = [];

  private modeloService = inject(ModeloService);

  constructor(private formBuilder: FormBuilder,
    private router: Router) {

    this.modelos = this.modeloService.getModelos();
    console.log(this.modelos)

    this.inicializarFormulario(this.modelo);
  }
  inicializarFormulario(modelo: ModeloDTO) {
    this.formGroup = this.formBuilder.group({
      id: [modelo.id],
      nome: [modelo.nome, Validators.required],
      modelo_id: [modelo.modelo_id, Validators.required],
    });
  }

  adicionarModelo(): void {
    this.router.navigate(['cadastro/novo-modelo']);
  }

  itemClick(modelo: any) {
    (modelo)
    this.router.navigate(['cadastro/modelo/' + modelo.id]);

  }
}
