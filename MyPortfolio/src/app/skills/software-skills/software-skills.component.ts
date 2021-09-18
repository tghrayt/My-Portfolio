import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-software-skills',
  templateUrl: './software-skills.component.html',
  styleUrls: ['./software-skills.component.css']
})
export class SoftwareSkillsComponent implements OnInit {

  constructor() { }
  name ="hashtag.png";
  ngOnInit(): void {
  }

  // skillsSection = {
  //   softwareSkills: [
  //     {
  //       skillName: "html-5",
  //       fontAwesomeClassname: "fab fa-html5"
  //     },
  //     {
  //       skillName: "css3",
  //       fontAwesomeClassname: "fab fa-css3-alt"
  //     },
  //     {
  //       skillName: "sass",
  //       fontAwesomeClassname: "fab fa-sass"
  //     },
  //     {
  //       skillName: "JavaScript",
  //       fontAwesomeClassname: "fab fa-js"
  //     },
  //     {
  //       skillName: "Angular",
  //       fontAwesomeClassname: "fab fa-angular"
  //     },
  //     {
  //       skillName: "nodejs",
  //       fontAwesomeClassname: "fab fa-node"
  //     },
  //     {
  //       skillName: "npm",
  //       fontAwesomeClassname: "fab fa-npm"
  //     },
  //     {
  //       skillName: "sql-database",
  //       fontAwesomeClassname: "fas fa-database"
  //     },
  //     {
  //       skillName: "python",
  //       fontAwesomeClassname: "fab fa-python"
  //     },
  //      {
  //        skillName: "Java",
  //        fontAwesomeClassname: "fab fa-java"
  //      },
  //     // {
  //     //   skillName: "Firebase",
  //     //   fontAwesomeClassname: "simple-icons:firebase"
  //     // }

  //   ]
  // };


  skillsSection = {
    softwareSkills: [
      {
        skillName: "html-5",
        fontAwesomeClassname: "html.png"
      },
      {
        skillName: "css3",
        fontAwesomeClassname: "css.png"
      },
      {
        skillName: "C sharp",
        fontAwesomeClassname: "csharp.png"
      },
      {
        skillName: "Java",
        fontAwesomeClassname: "java.png"
      },
      {
        skillName: ".NET",
        fontAwesomeClassname: "dotnet.png"
      },    
      {
        skillName: "Angular",
        fontAwesomeClassname: "angular.png"
      },
      {
        skillName: "JavaScript",
        fontAwesomeClassname: "javascript.png"
      },
      {
        skillName: "data base",
        fontAwesomeClassname: "database.png"
      },
      {
        skillName: "Azure",
        fontAwesomeClassname: "azure.png"
      },
      {
        skillName: "docker",
        fontAwesomeClassname: "docker.png"
      },
      {
        skillName: "ML .NET",
        fontAwesomeClassname: "ml.png"
      },
      {
        skillName: "Microservices",
        fontAwesomeClassname: "microservices.png"
      },
      {
        skillName: "Jenkins",
        fontAwesomeClassname: "jenkins.png"
      },
      {
        skillName: "Oracle",
        fontAwesomeClassname: "oracle.png"
      },
      {
        skillName: "kubernetes",
        fontAwesomeClassname: "kubernetes.png"
      }
    ]
  };
}
