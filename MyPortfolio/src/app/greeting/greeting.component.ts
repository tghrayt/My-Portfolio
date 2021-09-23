import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {

  constructor() { }

   greeting= {
    username: "Ait tghrayt youssef",
    title: "Hi all, I'm Youssef",
    subTitle: "Software Engineer 🚀 having an experience of building Web applications with JavaScript / Angular / .NET and some other cool libraries and frameworks.",
    resumeLink: "https://drive.google.com/file/d/1YDL67gpUNYOLilOKLSp_Dee40fCtILw7/view?usp=sharing"
    }

  ngOnInit(): void {
  }

}
