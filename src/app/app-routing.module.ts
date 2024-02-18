import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InformationComponent } from './information/information.component';
import { EducationComponent } from './education/education.component';
import { VoluntaryDisclosureComponent } from './voluntary-disclosure/voluntary-disclosure.component';
import { ExperienceComponent } from './experience/experience.component';

const routes: Routes = [
  {path: '', component: LoginComponent}, 
  {path:'signup', component: SignupComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'information',component:InformationComponent},
  {path:'education',component:EducationComponent},
  {path:'voluntary-disclosure',component:VoluntaryDisclosureComponent},
  {path:'experience',component:ExperienceComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

