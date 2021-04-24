import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* import AmplifyUIAngularModule  */
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';

/* new form imports */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table'
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { CreateEventDialogComponent } from './create-event-dialog/create-event-dialog.component';
import { ViewEventListComponent } from './view-event-list/view-event-list.component';
import { ViewEventComponent } from './view-event/view-event.component';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    CreateEventDialogComponent,
    ViewEventListComponent,
    ViewEventComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    /* configure app with AmplifyUIAngularModule */ 
    AmplifyUIAngularModule,
    /* configuring form modules */
    FormsModule,
    ReactiveFormsModule,
    /**/
    BrowserAnimationsModule,
    TableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CreateEventDialogComponent]
})
export class AppModule { }
