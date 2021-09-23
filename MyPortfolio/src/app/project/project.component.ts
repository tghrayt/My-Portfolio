import { Component, OnInit } from '@angular/core';
import {Apollo} from "apollo-angular";
import gql from 'graphql-tag';
import { Repo } from '../models/repo';
import { GithubService } from '../services/github.service';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  $projects : Repo[];
  constructor(private service : GithubService) { }

  ngOnInit(): void {
      this.getRepoInformation();
  }

  getRepoInformation(){
    this.service.getRepoInformation()
      .subscribe(data => {
        this.$projects = data;
        console.log(this.$projects);
      }, err => {
        console.log(err);
      })
  }

}
