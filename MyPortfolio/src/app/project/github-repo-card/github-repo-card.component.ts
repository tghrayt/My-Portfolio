import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-repo-card',
  templateUrl: './github-repo-card.component.html',
  styleUrls: ['./github-repo-card.component.css']
})
export class GithubRepoCardComponent implements OnInit {


  @Input() github:any;
  @Input() link:any;
  constructor(private window: Window) { }

  ngOnInit(): void {
    console.log(this.github.html_url);
  }

  onCardClick(){
    let win = window.open(this.github.html_url, "_blank");
    win.focus();
  }
  

}
