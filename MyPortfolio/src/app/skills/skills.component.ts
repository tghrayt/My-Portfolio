import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }


  skillsSection = {
    title: "What I do💁‍♂️",
    subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
    skills: [
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications.",
      "⚡ Trekking lover and hungry to learn more new stuff all the time.",
      "⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks.",
      "⚡ Integration of third party services.",
      "⚡ Experience of working with Computer Vision and ML projects."
    ]
  };
  ngOnInit(): void {
  }

}
