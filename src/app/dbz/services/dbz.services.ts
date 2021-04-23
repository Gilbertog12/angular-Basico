import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interfaces';



@Injectable()
export class DbzServices{


  
  
  
  
  private _Personajes:Personaje[]=[
    
    {
      Personaje: 'Goku',
      Poder: 15000
    },
    
    {
      Personaje:'Vegeta',
      Poder : 8000
    }
  ]
  
  get Personajes():Personaje[]{
    return [...this._Personajes]
  }
  
  constructor(){

      console.log('servicio inicializado')
  }


  agregarPersonaje(Personaje:Personaje){
    
    this._Personajes.push(Personaje)
  }

}