import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { IntroComponent } from './components/info/intro/intro.component';
import { PeopleComponent } from './components/people/people.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TherapyComponent } from './components/therapy/therapy.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'intro', component: IntroComponent },
  { path: 'therapy', component: TherapyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
