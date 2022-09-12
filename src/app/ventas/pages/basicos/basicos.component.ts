import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent  {


  nombreLower:string='miguel'
  nombreUpper:string='MIGUEL'
  nombreCompleto:string='mIgUeL AuReLa'

  
  fecha:Date=new Date(); //el día de hoy
}
