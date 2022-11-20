import { NewWhaleComponent } from './pages/new-whale/new-whale.component';
import { WhaleDetailComponent } from './pages/whales/whale-detail/whale-detail.component';
import { AboutComponent } from './pages/about/about.component';
import { WhalesComponent } from './pages/whales/whales.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "whales", component: WhalesComponent},
  {path: "whales/:id", component: WhaleDetailComponent},
  {path: "newwhale", component: NewWhaleComponent},
  {path: "about", component: AboutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
