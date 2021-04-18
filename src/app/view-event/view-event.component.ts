import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { APIService } from '../API.service';
import { EventDataService } from '../event-data.service';
import { LoginUserDataServiceService } from '../login-user-data-service.service';

@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.component.html',
  styleUrls: ['./view-event.component.scss']
})
export class ViewEventComponent implements OnInit {
  participantList: any[] = [];
  commentList: any[] = [];
  content = '';

  colsComments = [
    {field: 'content', header: 'Comment', width: '50%'},
    {field: 'userName', header: 'Name', width: '25%'},
    {field: 'createdAt', header: 'Date', width: '25%'}
  ]
  
  colsParticipants = [
    {field: 'userName', header: 'Participants'}
  ]

  constructor(
    private eventDataService: EventDataService,
    private loginUserDataService: LoginUserDataServiceService,
    private router: Router,
    private api: APIService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    console.log('eventData id: ' + this.eventDataService.eventData['id']);
    console.log('eventData name: ' + this.eventDataService.eventData['name']);

    if (this.eventDataService.eventData['participants'] && 
    this.eventDataService.eventData['participants'].items) {
      this.participantList = this.eventDataService.eventData['participants'].items;
      this.participantList.forEach((participant: any) => {
        if (participant['comments'] && participant['comments'].items) {      
          participant['comments'].items.forEach((comment: any) => {
            this.commentList.push(comment);
          });
        }
      });
    }

    /* fetch eventParticipants*/
    this.api.ListEventParticipants().then(event => {
      if (event.items) {
        this.participantList = event.items;
      }
    });

    /* subscribe to new eventParticipants being created */
    this.api.OnCreateEventParticipantListener.subscribe((event: any) => {
      const newEvent = event.value.data.onCreateEventParticipant;
      if (this.participantList) {
        this.participantList = [newEvent, ...this.participantList];
      } else {
        this.participantList = [newEvent];
      }
    });
  }

  sendComment() {
    console.log('content: ' + this.content);
    const createForm = this.fb.group({
      'eventParticipantId': ['', Validators.required],
      'content': [this.content, Validators.required],
    });

  }

  joinEvent() {
    const createForm = this.fb.group({
      'eventId': [this.eventDataService.eventData.id, Validators.required],
      'userName': [this.loginUserDataService.userName, Validators.required],
    });

    this.api.CreateEventParticipant(createForm.value).then(event => {
      console.log('eventParticipant created');
    })
    .catch(e => {
      console.log('error creating eventParticipant...', e);
    }); ;
  }

  back() {
    this.router.navigate(['view-event-list']);
  }

}
