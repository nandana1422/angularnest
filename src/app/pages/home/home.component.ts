import { Component } from '@angular/core';
import { CarouselComponent } from '../../units/carousel/carousel.component';
import { AccordionComponent } from '../../units/accordion/accordion.component';
import { CardsComponent } from '../../units/cards/cards.component';
import { ImageComponent } from "../image/image.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent, AccordionComponent, ImageComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
