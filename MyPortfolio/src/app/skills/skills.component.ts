import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }


  skillsSection = {
    title: "What I doðââï¸",
    subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
    skills: [
      "â¡ Develop highly interactive Front end / User Interfaces for your web applications.",
      "â¡ Trekking lover and hungry to learn more new stuff all the time.",
      "â¡ Progressive Web Applications ( PWA ) in normal and SPA Stacks.",
      "â¡ Integration of third party services.",
      "â¡ Experience of working with Computer Vision and ML projects."
    ]
  };
  ngOnInit(): void {
  }

}
