import { Component, OnInit } from '@angular/core';
import { Projects } from 'src/app/interfaces/projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Projects[];

  constructor() {
    this.projects = [
      {
        year: 2021,
        info: "Hernández-Chávez M., Cortés-Caballero J.M., Pérez-Martínez Á.A., Hernández-Quintanar L.F., Roa-Tort K., Rivera-Fernández J.D., Fabila-Bustos D.A., Development of virtual reality automotive lab for training in engineering students, Sustainability 13(17) (2021).",
        url: 'https://doi.org/10.3390/su13179776',
        id: "id2021"
      },
      {
        year: 2020,
        info: "José Miguel Cortés Caballero, Ángel Admin Pérez Martínez, José Eduardo Mejía Villegas, Macaria Hernández Chávez, Diego A. Fabila Bustos, Luis Quintanar, La formación de ingenieros en sistemas automotrices mediante la realidad aumentada, Innovación educativa, 20(82) (2020). ISSN: 2594-0392",
        id: "id2020"
      },
      {
        year: 2020,
        info: "Luis Hernández-Quintanar, Diego A. Fabila-Bustos, Macaria Hernández-Chávez, Alma Valor, José M. de la Rosa, Suren Stolik, Fiber-optic pulseoximeter for local oxygen saturation determination using a Monte Carlo multi-layer model for calibration, Computer Methods and Programs in Biomedicine, 187 (2020).",
        url: 'https://doi.org/10.1016/j.cmpb.2019.105237',
        id: "id2020"
      },
      {
        year: 2019,
        info: "Luis Hernández-Quintanar, Diego A. Fabila-Bustos, Macaria Hernández-Chávez, Alma Valor, José M. de la Rosa, Suren Stolik, Fiber-optic pulseoximeter for local oxygen saturation determination using a Monte Carlo multi-layer model for calibration, Computer Methods and Programs in Biomedicine, 187 (2020).",
        url: 'https://doi.org/10.1016/j.cmpb.2019.105237',
        id: "id2019"
      },
      {
        year: 2017,
        info: "Diego A. Fabila-Bustos, Úrsula D. Arroyo-Camarena, María D. López-Vancell, Marco A. Durán-Padilla, Itzel Azuceno-García, Suren Stolik-Isakina, Alma Valor-Reed, Elizabeth Ibarra-Coronado, Luis F. Hernández-Quintanar, Galileo Escobedo, José M. de la Rosa-Vázquez, 'Fluorescence spectroscopy as a tool for the assessment of liver samples with several stages of fibrosis', Photomedicine and Laser Surgery. (2017).",
        url: 'https://doi.org/10.1089/pho.2017.4301',
        id: "id2017"
      },
      {
        year: 2016,
        info: "Luis F. Hernández Quintanar, Fulgencio Y. López Silva, Diego A. Fabila Bustos, Joel Serrano Navarro, José M. de La Rosa Vázquez, Patrik N. Brodin, Chandan Guha, Wolfgang A. Tomé, Suren Stolik Isakina, 'In Vitro Photoirradiation System for Simultaneous Irradiation with Different Light Doses at a Fixed Temperature', Photomedicine and Laser Surgery, Vol. 34, No. 3: 108-115. (2016). ISSN: 1549-5418.",
        url: 'https://doi.org/10.1089/pho.2015.4030',
        id: "id2016"
      },
      {
        year: 2015,
        info: "J. M. de la Rosa Vázquez, D. A. Fabila-Bustos, L. F. J. Hernández-Quintanar, A. Valor, S. Stolik, 'Detection of Counterfeit Tequila by Fluorescence Spectroscopy', Journal of Spectroscopy, Vol. 2015, (2015). ISSN: 2314-4920. ISSN: 2314-4920",
        id: "id2015"
      },
    ]
   }

  ngOnInit(): void {
  }

  print(year: any){
    console.log(year);
    console.log(this.projects[0].id);


  }

}
