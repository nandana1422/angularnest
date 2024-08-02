import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DepartmentComponent } from './pages/department/department.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { MobilityComponent } from './pages/mobility/mobility.component';
import { AerospaceComponent } from './pages/aerospace/aerospace.component';
import { BfsComponent } from './pages/bfs/bfs.component';
import { LocomotiveComponent } from './pages/locomotive/locomotive.component';
import { InsuranceComponent } from './pages/insurance/insurance.component';
import { HealthcareComponent } from './pages/healthcare/healthcare.component';
import { IndustryComponent } from './pages/industry/industry.component';
import { CybersecurityComponent } from './pages/cybersecurity/cybersecurity.component';

export const routes: Routes = [

    {path:"",component:HomeComponent},
    {path:'department',component:DepartmentComponent},
    {path:'contact',component:ContactComponent},
    {path:'about',component:AboutComponent},
     {path:'mobility',component:MobilityComponent},
     {path:'aerospace',component:AerospaceComponent},
     {path:'bfs',component:BfsComponent},
     {path:'locomotive',component:LocomotiveComponent},
     {path:'insurance',component:InsuranceComponent},
     {path:'industrial',component:IndustryComponent},
     {path:'healthcare',component:HealthcareComponent},
     {path:'cybersecurity',component:CybersecurityComponent}

];
