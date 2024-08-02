import { Component } from '@angular/core';
import { NavbarComponent } from "../../units/navbar/navbar.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AboutComponent, NavbarComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
