import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent{
  departments=[
    {
      id:1,
      title:"BFS",
      image:"https://th.bing.com/th/id/OIP.a2Kqxt4zzaRnwENvJlhMiAHaEL?w=282&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      description:"Accelerating the cashless economy efficiently by adopting global standards & local priorities",
      link:"/bfs"
    },
    {
      id:2,
      title:"MOBILITY",
      image:"https://th.bing.com/th/id/OIP.Ra3SkTnv9hZmcDsEePKKKgHaEK?w=320&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      description:"We are Revolutionizing the world of Mobility",
      link:"/mobility"
    },
    {
      id:3,
      title:"LOCOMOTIVE",
      image:"https://th.bing.com/th/id/OIP.lXPDbe0gnD9w1viV7CQ9KQHaEo?rs=1&pid=ImgDetMain",
      description:"delivering high-quality innovation in the locomotive sector",
      link:"/locomotive"
    },
    {
      id:4,
      title:"INDUSTRIAL",
      image:"https://th.bing.com/th/id/OIP._69vH_UHftS0L4zB1gF7NAHaE8?w=279&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      description:"Where Power Meets Production: Redefining Manufacturing & Energy.",
      link:"/industrial"
    },
    {
      id:5,
      title:"AERO SPACE",
      image:"https://wallpaperaccess.com/full/2101528.jpg",
      description:"Pushing boundaries & defending horizons with cutting-edge technologies",
      link:"/aerospace"
    },
    {
      id:6,
      title:"INSURANCE",
      image:"https://th.bing.com/th/id/OIP.vCss-WqfLdEgSf-Nqn66DwHaE8?w=240&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      description:"Unlocking the potential of insurance through technology.",
      link:"/insurance"
    },
    {
      id:7,
      title:"HEALTH CARE",
      image:"https://th.bing.com/th/id/OIP.UAFaVt_1PPbkYT75o83TogHaEK?w=312&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      description:"Promoting digital innovation & excellence in the healthcare industry.",
      link:"/healthcare"
    },
    {
      id:8,
      title:"CYBERSECURITY",
      image:"https://th.bing.com/th/id/OIP.ifBk6-Tu3bk2ZcZuoTwrMgHaD4?w=307&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      description:"safeguarding computers, networks, and data from unauthorized access or cyber threats.",
      link:"/cybersecurity"
    },
  ]

}