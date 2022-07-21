import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { StarComponent } from './shared/component/star/star.component';

import { NavBarComponent } from './core/component/nav-bar/nav-bar.component';
import {RouterModule} from '@angular/router'
import {HttpClientModule} from '@angular/common/http'

import { CourseModule } from './courses/course.module';
import { CoreModule } from './core/core.module';
import { Erro404Component } from './core/component/erro-404/erro-404.component';

@NgModule({
  declarations: [
    AppComponent,
    Erro404Component
  ],
  imports: [
    CoreModule,
    HttpClientModule,
    BrowserModule,
    CourseModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'courses', pathMatch: 'full'
      },
      {
        path:'**', component: Erro404Component
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
