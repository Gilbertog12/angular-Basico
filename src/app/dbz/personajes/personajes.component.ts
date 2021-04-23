import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzServices } from '../services/dbz.services';


@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  
})
export class PersonajesComponent  {
  
  // @Input('data') Personajes:Personaje[] =[];

  get Personajes(){
    return this.DbzServices.Personajes
  }

  constructor(private DbzServices:DbzServices){}

}
