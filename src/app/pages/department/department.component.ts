import { Component } from '@angular/core';
import { CardsComponent } from '../../units/cards/cards.component';
import { NavbarComponent } from "../../units/navbar/navbar.component";

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [CardsComponent, NavbarComponent],
  templateUrl: './department.component.html',
  styleUrl: './department.component.css'
})
export class DepartmentComponent {

}
