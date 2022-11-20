import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { WhalesComponent } from './pages/whales/whales.component';
import { WhaleDetailComponent } from './pages/whales/whale-detail/whale-detail.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormWhaleComponent } from './components/form-whale/form-whale.component';
import { FormsModule } from '@angular/forms';
import { NewWhaleComponent } from './pages/new-whale/new-whale.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    WhalesComponent,
    WhaleDetailComponent,
    NavbarComponent,
    FormWhaleComponent,
    NewWhaleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
