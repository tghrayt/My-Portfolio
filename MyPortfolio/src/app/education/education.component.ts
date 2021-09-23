import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor() { }

    //list of education experience

  timeline = [
    {
      heading: "B.Tech - Computer Science & Engineering",
      duration: "2020",
      subtitle: "Hassan II University, fstm",
      content: "Successfully completed my engineer degree in ",
      contentDetail: "Computer science from Hassan II University, fstm.",
      className1: "mar-right",
      className2: "prt_about_learnbox_left"
    },
    {
      heading: "Bachelor of Applied Mathematics",
      duration: "2017",
      subtitle: "Moulay Ismail University ",
      content: "Successfully completed my Bachelor ",
      contentDetail: "in 2017 from Moulay Ismail University.",
      className1: "mar-left",
      className2: "prt_about_learnbox_right"
    },
    {
      heading: "High school",
      duration: "2014",
      subtitle: "Hassan II secondary school",
      content: "Successfully completed my high school studies ",
      contentDetail: "in 2014 from Hassan II University, fstm.",
      className1: "mar-right",
      className2: "prt_about_learnbox_left"
    }
    ];
  ngOnInit(): void {
  }

}
