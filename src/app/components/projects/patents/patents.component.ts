import { Component, OnInit } from '@angular/core';
import { Patent } from 'src/app/interfaces/patents';

@Component({
  selector: 'app-patents',
  templateUrl: './patents.component.html',
  styleUrls: ['./patents.component.css']
})
export class PatentsComponent implements OnInit {

  patents: Patent[];

  constructor() {
    this.patents = [
      {
        info: 'Hernández L., Stolik S., de la Rosa J., Fabila D., Valor A., Tome W., Orestes M., López Y., Navarro J., 2017, Sistema automatizado de fotoirradiación de cultivos celulares con control de la densidad de potencia y de la temperatura, México, Número de Solicitud MX/a/2017/004402, presentada Abril 2017, Patente Pendiente'
      },
      {
        info: 'Hernández L., Stolik S., de la Rosa J., Fabila D., Valor A., Orestes M., de la Cadena A., 2018, Sistema para la determinación de la presión ejercida por una sonda de espectroscopia de reflectancia de fibra óptica, México, Número de Solicitud MX/a/2018/000810, Patente Otorgada Julio 2020'
      },
      {
        info: 'Hernández L., Stolik S., de la Rosa J., Fabila D., Valor A., 2018, Sistema para la inserción de una fibra óptica modificada para la aplicación de fototerapia intersticial, México, Número de Solicitud MX/a/2018/003508, presentada Enero 2018, Patente Pendiente'
      }
    ]
   }

  ngOnInit(): void {
  }

}
