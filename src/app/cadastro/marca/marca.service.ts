import { Injectable } from '@angular/core';
import { Marca } from './model';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {
  marca:Marca[]=[]

  constructor() { }

  this= [
    {
      "id": 34,
      "logo":"/assets/images/logo.png",
      "name": "Grand Theft Auto V"
    },
    {
      "id": 59,
      "logo":"/assets/images/logo.png",
      "name": "Bloodstained Ritual of the Night"
    },
    {
      "id": 60,
      "logo":"/assets/images/logo.png",
      "name": "F1 2019 - Anniversary Edition"
    },
    {
      "id": 62,
      "logo":"/assets/images/logo.png",
      "name": "PLAYERUNKNOWN\'S BATTLEGROUNDS"
    },
    {
      "id": 64,
      "logo":"/assets/images/logo.png",
      "name": "Batman: Arkham Knight"
    }
  ]
}
