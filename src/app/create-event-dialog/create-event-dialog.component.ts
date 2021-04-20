import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

import { APIService } from '../API.service';

@Component({
  selector: 'app-create-event-dialog',
  templateUrl: './create-event-dialog.component.html',
  styleUrls: ['./create-event-dialog.component.scss']
})
export class CreateEventDialogComponent implements OnInit {

  public createForm: FormGroup = this.fb.group({});

  hostName = '';

  constructor(
    private api: APIService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CreateEventDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: any
  ) { 
    this.hostName = data.hostName;
  }

  ngOnInit(): void {
    const dateTime = new Date();
    this.createForm = this.fb.group({
      'name': ['', Validators.required],
      'type': ['', Validators.required],
      'venue': ['', Validators.required],
      'hostName': [this.hostName, Validators.required],
      'startDt': ['', Validators.required],
      'endDt': ['', Validators.required],
      'limit': [null],
      'description': ['']
    });
    console.log('hostName: ' + this.hostName);
  }

  close() {
    this.dialogRef.close();
  }

  public onCreate() {
    const startDt = this.createForm.get('startDt');
    const endDt = this.createForm.get('endDt');
    if (startDt && endDt) {
      this.createForm.patchValue({
        startDt: startDt.value + ':00.000Z',
        endDt: endDt.value + ':00.000Z'
      });
    }
    this.api.CreateEvent(this.createForm.value).then(event => {
      console.log('item created!');
      this.dialogRef.close();
    })
    .catch(e => {
      console.log('error creating event...', e);
    });  
  }

}
