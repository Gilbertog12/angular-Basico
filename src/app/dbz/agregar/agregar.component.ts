import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzServices } from '../services/dbz.services';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  
})
export class AgregarComponent  {

  
  @Input() Personaje:Personaje ={
    Personaje:'',
    Poder : 0
  }

  constructor(private DbzServices:DbzServices){

  }

  // @Output() onNuevoPersonaje:EventEmitter<Personaje> = new EventEmitter();
  

  agregar( ){

    if(this.Personaje.Personaje.trim().length === 0){
      return;
    }

    // this.onNuevoPersonaje.emit(this.Personaje)  
    this.DbzServices.agregarPersonaje(this.Personaje)
    
    this.Personaje = {Personaje:'',Poder:0}

      
    
  }
}
