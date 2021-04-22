import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent implements OnInit {
  
  heroes :string[] = ['Spiderman','Iron Man','Hulk','Capitan America']
  HeroeBorrado: string = '';

  constructor() { }

  ngOnInit(): void {

  }

  BorrarHeroe(){
    this.HeroeBorrado = this.heroes.shift() || ''
    

  }

}
