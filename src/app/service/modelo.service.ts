import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ModeloDTO } from '../models/modelo.dto';

@Injectable({
  providedIn: 'root'
})
export class ModeloService {
  public modelos: ModeloDTO[] = [];
  public modelo!: ModeloDTO;

  constructor(public http: HttpClient) {

    this.modelos = [
      {
        "id": 1,
        "nome": "Modelo 1",
        "modelo_id": 1
      },
      {
        "id": 2,
        "nome": "Modelo 2",
        "modelo_id": 2
      },
      {
        "id": 3,
        "nome": "Modelo 3",
        "modelo_id": 3
      },
      {
        "id": 4,
        "nome": "Modelo 4",
        "modelo_id": 4
      },
      {
        "id": 5,
        "nome": "Modelo 5",
        "modelo_id": 5
      }
    ]
  };
  

  getModelos() {
    return this.modelos;
  }

  adicionarModelo(modelo: ModeloDTO): void {
    if (modelo)
      this.modelos.push(this.modelo);
  }

  findById(id: number): any {
    if (id) {
      const objetoEncontrado = this.modelos.find(objeto => objeto.id === id);
      if (objetoEncontrado)
        return objetoEncontrado;
    }
  }

  atualizarItem(id: number, novoNome: string): void {
    const index = this.modelos.findIndex(item => item.id === id);
    if (index !== -1) {
      this.modelos[index].nome = novoNome;
    }
  }




























}
