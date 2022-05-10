import { Component, OnInit } from '@angular/core';
import { Divisions } from 'src/app/interfaces/divisions';

@Component({
  selector: 'app-divisions',
  templateUrl: './divisions.component.html',
  styleUrls: ['./divisions.component.css']
})
export class DivisionsComponent implements OnInit {
  divisions: Divisions[]

  constructor() {
    this.divisions = [
      {
        img: '../../../../assets/images/divisions/fotofisica.jpg',
        title: 'Fotofísica',
        info: 'Esta área de especialidad se enfoca en las interacciones físicas de la luz con la materia a un nivel atómico y molecular. Esto incluye la vibración y rotación de las moléculas.',
        url: 'fotophisics'
      },
      {
        img: '../../../../assets/images/divisions/fotoquimica.jpg',
        title: 'Fotoquímica',
        info: 'Es el estudio de los cambios químicos que ocurren en las moléculas después de la absorción directa de la energía luminosa (comparar con fotosensibilización). Esto incluye ambas alteraciones en la molécula absorbente y reacciones que ocurren entre la molécula absorbente en su estado excitado y las moléculas adyacentes.',
        url: 'fotophisics'
      },
      {
        img: '../../../../assets/images/divisions/espectroscopia.jpg',
        title: 'Espectroscopía',
        info: 'El estudio de la absorción y la emisión de la luz por la materia, así también la forma en que está relacionada la dependencia de estos procesos con la longitud de onda de la radiación. Un espectro de acción es la eficiencia con la cual la radiación electromagnética produce una reacción fotoquímica, graficada como una función de la longitud de onda de la radiación',
        url: 'fotophisics'
      },
      {
        img: '../../../../assets/images/divisions/fotosensibilizacion.png',
        title: 'Fotosensibilización',
        info: 'En este proceso, la energía de la luz es absorbida por una clase de molécula (el sensibilizador) y el o los estados de energía del sensibilizador experimentan reacciones que resultan en alteraciones químicas de otro tipo de moléculas en el sistema (la molécula substrato). El sensibilizador no se altera en ciertos tipos de reacciones de fotosensibilización.',
        url: 'fotophisics'
      },
      {
        img: '../../../../assets/images/divisions/efecto_radiación.jpg',
        title: 'Efecto de la radiación UV en las moléculas y las células',
        info: 'Este campo tiene que ver con la fotoquímica de la radiación UV con el ácido desoxirribonucleico (ADN), ácido ribonucleico (ARN) y las proteínas y los efectos biológicos que se producen por las cambios fotoquímicos y fotofísicos en estas moléculas (por ejemplo, letalidad, mutaciones). Este campo también estudia los sofisticados sistemas bioquímicos por los que las células se reparan de este daño fotoquímico.',
        url: 'fotophisics'
      },
      {
        img: '../../../../assets/images/divisions/fotobiologia_ambiental.jpg',
        title: 'Fotobiología ambiental',
        info: 'Las diferentes longitudes de onda de la luz del sol ejercen tanto efectos benéficos como perjudiciales, no solo en células individuales u organismos, sino que en todo un ecosistema, donde se trata con los efectos de la luz en la composición de las especies y la productividad.',
        url: 'fotophisics'
      },
      {
        img: '../../../../assets/images/divisions/fotomedicina.jpg',
        title: 'Fotomedicina',
        info: 'Este campo está involucrado con los efectos benéficos y perjudiciales de la radiación no ionizante. En fotomedicina, lo que mayormente se piensa es en la inducción de cáncer de piel por la luz del sol, pero hay muchos otros tópicos importantes. Además, está el área benéfica donde la luz por sí sola, por ejemplo la terapia de baja intensidad de luz (LLLT), o los sensibilizadores más la luz son utilizados para tratar ciertas condiciones críticas, por ejemplo la psoriasis y el cáncer.',
        url: 'fotophisics'
      },
      {
        img: '../../../../assets/images/divisions/fotoquimica.jpg',
        title: 'Fotorrecepción no visual',
        info: 'La luz es recibida por un receptor en un organismo para monitorear el ambiente sin formar una imagen, en contraste con el caso de la visión. Uno pocos ejemplos son el reloj circadiano, el cual controla los niveles hormonales en animales y el fotoperiodismo, el cual controla el crecimiento estacional en plantas y animales.',
        url: 'fotophisics'
      },
      {
        img: '../../../../assets/images/divisions/vision.jpg',
        title: 'Visión',
        info: 'La fotorrecepción que resulta en la formación de una imagen. Este campo cubre la estructura y fotoquímica de los pigmentos visuales en los fotorreceptores (bastones y conos) del ojo.',
        url: 'fotophisics'
      },
      {
        img: '../../../../assets/images/divisions/fotomorfogénesis.jpg',
        title: 'Fotomorfogénesis',
        info: 'El desarrollo de un organismo puede verse influenciado por la información de la luz. Esta información viene de la cantidad, la calidad (por ejemplo las longitudes de onda presentes), la asimetría espacial (esto es la dirección de donde procede la luz) y la periodicidad de la luz.',
        url: 'fotophisics'
      },
      {
        img: '../../../../assets/images/divisions/fotomovimiento.jpg',
        title: 'Fotomovimiento',
        info: 'Para producir movimiento, las plantas y los organismos dependen de la calidad y dirección de la luz que incide en sus fotorreceptores. En la fotoquinesis, un organismo nada hacía o lejos de la luz. La curvatura fototrópica en las plantas puede ocurrir hacia o en contra de la luz, quizá el ejemplo mejor conocido son los girasoles.',
        url: 'fotophisics'
      },
      {
        img: '../../../../assets/images/divisions/fotosíntesis.jpg',
        title: 'Fotosíntesis',
        info: 'En este caso no es la información de la luz que se utiliza en la fotosíntesis, sino que su energía que es convertida en energía química estabilizada. Esto involucra la absorción de la luz por un pigmento, transferencia de energía, atrapamiento de energía o estabilización por los centros reactivos y la iniciación de las reacciones químicas de moléculas donores a aceptores.',
        url: 'fotophisics'
      },
      {
        img: '../../../../assets/images/divisions/bioluminiscencia.jpg',
        title: 'Bioluminiscencia',
        info: 'Para la mayoría de las personas, la bioluminiscencia está representada por el parpadeo de una luciérnaga o la fosforescencia que ocurre frecuentemente en la agitación de la superficie del océano. La bioluminiscencia es la emisión altamente eficiente de luz fría que tiene una función biológica para el organismo en cuestión, por ejemplo, para encontrar comida. Más de la mitad de todo el filo en el reino animal contiene miembros que son bioluminiscentes.',
        url: 'fotophisics'
      }
    ]
   }

  ngOnInit(): void {
  }

}
