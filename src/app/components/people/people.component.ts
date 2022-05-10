import { Component, OnInit } from '@angular/core';
import { People } from 'src/app/interfaces/people';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  people: People[]


  constructor() {
      this.people = [
        {
          img: "../../../assets/images/pp1.jpg",
          name: "Dra. Macaria Hernández Chávez",
          info: "Doctora en Ciencias de los Materiales por el Área Académica de Ciencias de la Tierra y Materiales de la Universidad Autónoma del Estado de Hidalgo (UAEH) y miembro del Sistema Nacional de Investigadores del CONACyT. En sus estudios de doctorado trabajó la caracterización física, química-mineralógica, reológica y térmica de arcillas caoliníticas, así como la simulación de sus propiedades térmicas y aplicaciones a nivel industrial.Maestra en Ciencias Químicas con Mención Honorífica por la Facultad de Química de la Universidad Nacional Autónoma de México (UNAM), con especialidad en Catálisis Heterogénea y Métodos de Síntesis y Caracterización de Nanomateriales y Lic. en Química por la Universidad Autónoma del Estado de Hidalgo con Reconocimiento y Medalla al Mérito Académico con especialidad en Química Analítica. La Doctora Macaria ha publicado artículos JCR, artículos publicados en revistas indizadas por el CONACyT y artículos de divulgación. Ha dirigido y participado en proyectos de investigación dentro del IPN, colaborado en proyectos con el IMP, UNAM y la UAEH y ha graduado a estudiantes de licenciatura del Instituto Politécnico Nacional.  Sus áreas de interés son la caracterización de materiales, la modelación y simulación de propiedades térmicas, reológicas y químicas en materiales. Nuevas rutas de síntesis y caracterización de nanomateriales y nuevos materiales, la obtención de combustibles amigables con el medio ambiente y la química analítica aplicada a la ciencia de los materiales.",
          links: [
            {
              platform: "../../../assets/images/researchgate.png",
              link: "https://www.researchgate.net/profile/Macaria-Hernandez-Chavez"
            }
          ]
        },
        {
          img: "../../../assets/images/pp1.jpg",
          name: "Dra. Karen Roa Tort",
          info: "La Dra. Karen Roa Tort es Ingeniera en Mecatrónica egresada de la Unidad Profesional Interdisciplinaria en Ingeniería y Tecnologías Avanzadas (UPIITA-IPN), obtuvo el grado de Maestra en Ciencias en Ingeniería Electrónica en la Escuela Superior de Ingeniería Mecánica y Eléctrica Unidad Zacatenco (ESIME Zac) con especialidad en instrumentación fotónica y Doctora en Comunicaciones y Electrónica en la ESIME Unidad Culhuacan, graduada con honores. Es autora de artículos JCR, artículos indexados a SCOPUS y ha participado en el desarrollo de patentes en el área de instrumentación fotónica. Sus áreas de interés son instrumentación, sistemas fotónicos y sistemas de inteligencia artificial aplicados a la biofotónica. Actualmente es profesora en Ingeniería Fotónica en la ESIME Unidad Zacatenco.",
          links: [
            {
              platform: "../../../assets/images/researchgate.png",
              link: "https://www.researchgate.net/profile/Karen-Roa"
            }
          ]
        },
        {
          img: "../../../assets/images/pp2.jpg",
          name: "Dr. Diego Adrián Fabila Bustos",
          info: "El Dr. Diego Adrián Fabila obtuvo el título de Ingeniero en Biónica en la Unidad Profesional Interdisciplinaria en Ingeniería y Tecnologías Avanzadas (UPIITA) en el año 2008, posteriormente en el año 2010 obtuvo el grado de Maestro en Ciencias en Ingeniería Electrónica en la Escuela Superior de Ingeniería Mecánica y Eléctrica Unidad Zacatenco (ESIME Zac). En el año 2014 obtuvo el grado de Doctor en Comunicaciones y Electrónica con especialidad en Instrumentación Fotónica en la Escuela Superior de Ingeniería Mecánica y Eléctrica Unidad Culhuacán (ESIME Cul). Es autor de varios artículos JCR y patentes. Su área de investigación está enfocada al desarrollo de instrumental basado en electrónica y fotónica para el diagnóstico y tratamiento de enfermedades. Actualmente forma parte del Sistema Nacional de Investigadores Nivel 1 y profesor de tiempo completo Unidad Profesional Interdisciplinaria de Ingeniería Campus Hidalgo del Instituto Politécnico Nacional (UPIIH-IPN).",
          links: [
            {
              platform: "../../../assets/images/researchgate.png",
              link: "https://www.researchgate.net/profile/Diego-Fabila"
            }
          ]
        },
        {
          img: "../../../assets/images/pp2.jpg",
          name: "Dr. Josué Daniel Rivera Fernández",
          info: "El Dr. Josué Daniel Rivera Fernández es ingeniero en Mecatrónica egresado de la Unidad Profesional Interdisciplinaria en Ingeniería y Tecnologías Avanzadas (UPIITA-IPN), Maestro en Ciencias en Ingeniería Electrónica en la Escuela Superior de Ingeniería Mecánica y Eléctrica Unidad Zacatenco (ESIME Zac) con especialidad en instrumentación de donde se graduó con honores y Doctor en Comunicaciones y Electrónica con especialidad en Instrumentación Fotónica en la ESIME Unidad Culhuacan, igualmente graduado con honores. Ha participado en la publicación de artículos JCR, artículos indexados a SCOPUS, además posee el título de una patente y está en espera de otra cuyo registro se encuentra en el IMPI ambas en el área de instrumentación fotónica. Sus áreas de interés son instrumentación, sistemas fotónicos, sistemas de inteligencia artificial aplicados a la biofotónica, sistemas energéticos y redes inteligentes. Actualmente es profesor en la Unidad Profesional Interdisciplinaria de Energía y Movilidad del Instituto Politécnico Nacional (UPIEM-IPN).",
          links: [
            {
              platform: "../../../assets/images/researchgate.png",
              link: "https://www.researchgate.net/profile/Josue-Rivera-Fernandez"
            }
          ]
        },
        {
          img: "../../../assets/images/pp2.jpg",
          name: "Dr. Luis Felipe de Jesús Hernández",
          info: "El Dr. Luis Felipe Hernández Quintanar es ingeniero en Biónica egresado de la Unidad Profesional Interdisciplinaria en Ingeniería y Tecnologías Avanzadas (UPIITA), Maestro en Ciencias en Ingeniería Electrónica en la Escuela Superior de Ingeniería Mecánica y Eléctrica Unidad Zacatenco (ESIME Zac) y Doctor en Comunicaciones y Electrónica con especialidad en Instrumentación Fotónica en la ESIME Unidad Culhuacán. Su línea de investigación está ligada a las aplicaciones de la Biofotónica en diversas áreas. Actualmente forma parte del Sistema Nacional de Investigadores y es profesor de tiempo completo Unidad Profesional Interdisciplinaria de Ingeniería Campus Hidalgo del Instituto Politécnico Nacional (UPIIH).",
          links: [
            {
              platform: "../../../assets/images/researchgate.png",
              link: "https://www.researchgate.net/profile/Luis-Quintanar",
            },
            {
              platform: "../../../assets/images/scopus.png",
              link: "https://www.scopus.com/authid/detail.uri?authorId=57199653088"
            },
            {
              platform: "../../../assets/images/youtube.png",
              link: "https://www.youtube.com/channel/UC4ZOUyoqYbZaMl4lszAtr1Q"
            }
          ]
        }
    ]
   }

  ngOnInit(): void {
  }

}
