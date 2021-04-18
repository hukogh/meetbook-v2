import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ViewEventListComponent } from './view-event-list/view-event-list.component';
import { ViewEventComponent } from './view-event/view-event.component';

const routes: Routes = [
  { path: 'sign-in', component: AppComponent },
  { path: 'view-event-list', component: ViewEventListComponent },
  { path: 'view-event', component: ViewEventComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
