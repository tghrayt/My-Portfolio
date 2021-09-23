import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { HttpClientModule } from '@angular/common/http';
import {AnimationModule} from "./animation/animation.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { FooterComponent } from './footer/footer.component';
import { GreetingComponent } from './greeting/greeting.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { SkillsComponent } from './skills/skills.component';
import { SoftwareSkillsComponent } from './skills/software-skills/software-skills.component';
import { EducationComponent } from './education/education.component';
import { SkillProgressComponent } from './skill-progress/skill-progress.component';
import { ProjectComponent } from './project/project.component';
import { GithubRepoCardComponent } from './project/github-repo-card/github-repo-card.component';
import { GithubCalendarComponent } from './github-calendar/github-calendar.component';
import { ExperienceComponent } from './experience/experience.component';
import { ExperienceCardComponent } from './experience/experience-card/experience-card.component';
import { ContactComponent } from './contact/contact.component';
import { TopButtonComponent } from './top-button/top-button.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    GreetingComponent,
    SocialMediaComponent,
    SkillsComponent,
    SoftwareSkillsComponent,
    EducationComponent,
    SkillProgressComponent,
    ProjectComponent,
    GithubRepoCardComponent,
    GithubCalendarComponent,
    ExperienceComponent,
    ExperienceCardComponent,
    ContactComponent,
    TopButtonComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AnimationModule
  ],
  providers: [ { provide: Window, useValue: window }],
  bootstrap: [AppComponent]
})
export class AppModule { }
