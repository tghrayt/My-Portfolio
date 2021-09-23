import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  constructor() { }


  public workExperiences = {
    viewExperiences: true,
    experience: [
      {
        role: "Full Stack Engineer",
        company: "Involys",
        color: "#3f703f",
        companylogo: "../../../assets/images/involys.jpg",
        date: "Aug 2020 – Yet",
        desc: "Software Enginer - fullstack developer .NET/Angular and studies engineer at Involys.",
      },
      {
        role: "Engineering internship",
        company: "CIH Bank",
        color: "#3781c2",
        companylogo: "../../../assets/images/cih.png",
        date: "Feb 2020 – Jul 2020",
        desc: "I have completed my company internship in microservices architecture and web development.",
      },
      {
        role: "Software Engineer Intern",
        company: "Enhanced Technologies",
        color: "#ff9102",
        companylogo: "../../../assets/images/enh.png",
        date: "Jun 2019 – Aug 2019",
        desc: "The 6- Week summer training focused on full-stack web development and helped learn to work in a team.",
        }
    ]
  };
  ngOnInit(): void {
  }

}
