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
        "id": 1,
        "logo": "/assets/images/logo.png",
        "nome": "Marca 1"
      },
      {
        "id": 2,
        "logo": "/assets/images/logo.png",
        "nome": "Marca 2"
      },
      {
        "id": 3,
        "logo": "/assets/images/logo.png",
        "nome": "Marca 3"
      },
      {
        "id": 4,
        "logo": "/assets/images/logo.png",
        "nome": "Marca 4"
      },
      {
        "id": 5,
        "logo": "/assets/images/logo.png",
        "nome": "Marca 5"
      }
    ]
  }
  getCategorias() {
    return this.marcas;
  }

  adicionarMarca(marca: MarcaDTO): void {       
    if (marca)
      this.marcas.push(marca);
    
  }

  findById(id: number):any {
    if(id){
      const objetoEncontrado = this.marcas.find(objeto => objeto.id === id); 
      if(objetoEncontrado)    
      return objetoEncontrado;
    }  
  }
 
  atualizarItem(id: number, novoNome: string): void {
  const index = this.marcas.findIndex(item => item.id === id);
  if (index !== -1) {
    this.marcas[index].nome = novoNome;
  }
}




























}
