import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-progress',
  templateUrl: './skill-progress.component.html',
  styleUrls: ['./skill-progress.component.css']
})
export class SkillProgressComponent implements OnInit {

  constructor() { }



  techStack = {
    viewSkillBars: true,
    experience: [
      {
        Stack: "Backend",
        progressPercentage: "85%"
      },
      {
        Stack: "Frontend/Design",
        progressPercentage: "40%"
      },
      {
        Stack: "Programming",
        progressPercentage: "60%"
      },
      {
        Stack: "MachineLearning/AI",
        progressPercentage: "30%"
      }
    ]
  };

  progressStyle(percentage:string){
    return {    width: percentage}
  }
  ngOnInit(): void {
  }

}
