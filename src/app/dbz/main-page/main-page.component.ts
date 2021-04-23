import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzServices } from '../services/dbz.services';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  
})
export class MainPageComponent  {

  constructor(private dbzServices:DbzServices){

  }

  Personaje:Personaje ={
    Personaje:'Maestro Roshi',
    Poder : 0
  }


  
 
}
