import { Component } from '@angular/core';
import { IconKnowledge } from 'src/app/interfaces/IconKnowledge';

@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.scss']
})
export class KnowledgeComponent {

  iconsArray: IconKnowledge[] = [
    {
      src: '/assets/icons/knowledge/html5.svg',
      alt: 'Icone do html'
    },
    {
      src: '/assets/icons/knowledge/css3.svg',
      alt: 'Icone do css'
    },
    {
      src: '/assets/icons/knowledge/javascript.svg',
      alt: 'Icone do javascript'
    },
    {
      src: '/assets/icons/knowledge/nodejs.svg',
      alt: 'Icone do node js'
    },
    {
      src: '/assets/icons/knowledge/angular.svg',
      alt: 'Icone do angular'
    },
    {
      src: '/assets/icons/knowledge/sass.svg',
      alt: 'Icone do sass'
    },
  ]

}
