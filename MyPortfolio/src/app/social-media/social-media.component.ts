import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css']
})
export class SocialMediaComponent implements OnInit {

  constructor() { }

  socialMediaLinks = {

    github: "https://github.com/tghrayt",
    linkedin: "https://www.linkedin.com/in/youssef-ait-tghrayt-7418b5161/",
    gmail: "tghrayt.ysf@gmail.com",
    instagram : "https://www.instagram.com/tg_youssef/",
    facebook: "https://www.facebook.com/youssef.aittaghrayt"
  };

  ngOnInit(): void {
  }

}
