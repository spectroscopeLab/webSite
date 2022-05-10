import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { NewsComponent } from './components/news/news.component';
import { CarouselComponent } from './components/home/carousel/carousel.component';
import { InfoComponent } from './components/home/info/info.component';
import { LinksComponent } from './components/home/links/links.component';
import { FooterComponent } from './components/footer/footer.component';
import { MisvisComponent } from './components/home/misvis/misvis.component';
import { PeopleComponent } from './components/people/people.component';
import { PatentsComponent } from './components/projects/patents/patents.component';
import { SoftwareComponent } from './components/projects/software/software.component';
import { IntroComponent } from './components/info/intro/intro.component';
import { DivisionsComponent } from './components/Info/divisions/divisions.component';
import { TherapyComponent } from './components/therapy/therapy.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    MenuComponent,
    ProjectsComponent,
    NewsComponent,
    CarouselComponent,
    InfoComponent,
    LinksComponent,
    FooterComponent,
    MisvisComponent,
    PeopleComponent,
    PatentsComponent,
    SoftwareComponent,
    IntroComponent,
    DivisionsComponent,
    TherapyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
