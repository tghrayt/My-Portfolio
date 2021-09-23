import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  public contactInfo = {
    title: "Contact Me ☎️",
    subtitle: "Discuss a project or just want to say hi? My Inbox is open for all. It is my pleasure to communicate with you",
    number: "+212-657183645",
    email_address: "tghrayt.ysf@gmail.com"
  };
  constructor() { }

  ngOnInit(): void {
  }

}
