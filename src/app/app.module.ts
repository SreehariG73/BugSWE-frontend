import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './services/app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InformationComponent } from './information/information.component';
import { EducationComponent } from './education/education.component';
import { VoluntaryDisclosureComponent } from './voluntary-disclosure/voluntary-disclosure.component';
import { ExperienceComponent } from './experience/experience.component';
import { FormsModule } from '@angular/forms';
import { SkillsComponent } from './skills/skills.component';
import { WeblinksComponent } from './weblinks/weblinks.component';

import { HttpClientModule } from '@angular/common/http';
import { RecruiterDashboardComponent } from './recruiter-dashboard/recruiter-dashboard.component';
import { LoginService } from './services/login.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    InformationComponent,
    EducationComponent,
    VoluntaryDisclosureComponent,
    ExperienceComponent,
    SkillsComponent,
    WeblinksComponent,
    RecruiterDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
