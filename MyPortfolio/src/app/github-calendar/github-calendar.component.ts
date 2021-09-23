import { Component, OnInit } from '@angular/core';
declare var GitHubCalendar;

@Component({
  selector: 'app-github-calendar',
  templateUrl: './github-calendar.component.html',
  styleUrls: ['./github-calendar.component.css']
})
export class GithubCalendarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


    GitHubCalendar(".calendar", "tghrayt", {
      responsive: true,
      tooltips: true
    });
  }

}
