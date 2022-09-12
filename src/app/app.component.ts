import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipesApp';
  nombre :string='ferNando HerrERa';
  valor:number=1000;
  obj={
    Nombre:'fernando'
  }
  mostrarNombre(){
    console.log(this.nombre);
    console.log(this.valor);
    console.log(this.obj);
  }
  constructor(private primeNGConfig:PrimeNGConfig){}
  ngOnInit(){
    this.primeNGConfig.ripple=true;
  }
}
