import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms"
import {HttpClientModule} from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import {MatInputModule} from '@angular/material/input';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';


import { NavbarComponent } from './shared/navbar/navbar.component';
import { PostComponent } from './post/post.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,FormsModule,ReactiveFormsModule ,BrowserAnimationsModule,
    MatInputModule,MatSidenavModule,MatToolbarModule,MatIconModule,MatListModule,MatButtonModule,MatTableModule
  ],
  exports:[MatInputModule,MatSidenavModule,MatToolbarModule,MatIconModule,MatListModule,MatTableModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
