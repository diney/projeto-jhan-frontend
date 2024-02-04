import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MarcaDTO } from 'src/app/models/marca.dto';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {
  public marcas: MarcaDTO[] = [];
  public marca!: MarcaDTO

  constructor(public http: HttpClient) {

    this.marcas = [
      {
        "id": 34,
        "logo": "/assets/images/logo.png",
        "nome": "Marca 1"
      },
      {
        "id": 59,
        "logo": "/assets/images/logo.png",
        "nome": "Marca 2"
      },
      {
        "id": 60,
        "logo": "/assets/images/logo.png",
        "nome": "Marca 3"
      },
      {
        "id": 62,
        "logo": "/assets/images/logo.png",
        "nome": "Marca 4"
      },
      {
        "id": 64,
        "logo": "/assets/images/logo.png",
        "nome": "Marca 5"
      }
    ]
  }
  getCategorias() {
    return this.marcas;
  }

  adicionarMarca(marca: MarcaDTO): void {
    console.log(marca)
    if (marca)
      this.marcas.push(marca);
    
  }

  findById(id: number):any {
    if(id){
      const objetoEncontrado =this.marcas.find(objeto => objeto.id === id);
      return objetoEncontrado

    }
   

  }




























}
