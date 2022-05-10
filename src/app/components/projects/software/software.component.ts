import { Component, OnInit } from '@angular/core';
import { Software } from 'src/app/interfaces/software';

@Component({
  selector: 'app-software',
  templateUrl: './software.component.html',
  styleUrls: ['./software.component.css']
})
export class SoftwareComponent implements OnInit {

  softwareRegister: Software[];

  constructor() {
    this.softwareRegister = [
      {
        info: 'Software de control de un sistema para el estudio de la dosimetría en la Terapia Fotodinámica. Hernández Quintanar Luis Felipe de Jesús, Stolik Isakina Suren, de la Rosa Vázquez José Manuel, Registro 03-2018-032010362000-01, México, Abril 2018'
      },
      {
        info: 'Software de control de un sistema de fotoirradiación de tejido in vivo con temperatura controlada. Fabila Bustos Diego Adrián, Hernández Quintanar Luis Felipe de Jesús, Stolik Isakina Suren, de la Rosa Vázquez José Manuel, Registro 03-2018-032010375400-01, México, Abril 2018'
      }
    ]
   }

  ngOnInit(): void {
  }

}
