import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { APIService, ModelEventParticipantFilterInput, ModelIDInput } from '../API.service';
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
    public eventDataService: EventDataService,
    private loginUserDataService: LoginUserDataServiceService,
    private router: Router,
    private api: APIService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    
    // if (this.eventDataService.eventData['participants'] && 
    // this.eventDataService.eventData['participants'].items) {
    //   console.log('participant count: ' + this.eventDataService.eventData['participants'].items.length);
    //   this.participantList = this.eventDataService.eventData['participants'].items;
    //   this.participantList.forEach((participant: any) => {
    //     if (participant['comments'] && participant['comments'].items) {      
    //       participant['comments'].items.forEach((comment: any) => {
    //         this.commentList.push(comment);
    //       });
    //     }
    //   });
    // }

    const filterArg: ModelIDInput = {
      eq: this.eventDataService.eventData['id']
    }
    const filter: ModelEventParticipantFilterInput = {
      eventId: filterArg
    }

    /* fetch eventParticipants by eventId*/
    this.api.ListEventParticipants(filter).then(event => {
      if (event.items) {
        this.participantList = event.items;
      }
    });
    /* subscribe to new eventParticipants being created */
    this.api.OnCreateEventParticipantListener.subscribe((event: any) => {
      const newEvent = event.value.data.onCreateEventParticipant;
      if (newEvent['eventId'] === this.eventDataService.eventData['id']) {
        if (this.participantList) {
          this.participantList = [...this.participantList, newEvent];
        } else {
          this.participantList = [newEvent];
        }
      }
    });

    /* fetch eventComments by eventId*/
    this.api.ListComments(filter).then(comments => {
      if (comments.items) {
        this.commentList = comments.items;
      }
    });

    /* subscribe to new eventComments being created */
    this.api.OnCreateCommentListener.subscribe((comment: any) => {
      const newComment = comment.value.data.onCreateComment;
      if (newComment['eventId'] === this.eventDataService.eventData['id']) {
        if (this.commentList) {
          this.commentList = [...this.commentList, newComment];
        } else {
          this.commentList = [newComment];
        }
      }
    });
  }

  sendComment() {
    console.log('content: ' + this.content);
    const createForm = this.fb.group({
      'eventId': [this.eventDataService.eventData.id, Validators.required],
      'userName': [this.loginUserDataService.userName, Validators.required],
      'content': [this.content, Validators.required],
    });

    this.api.CreateComment(createForm.value).then(event => {
      console.log('comment created');
      this.content = '';
    })
    .catch(e => {
      console.log('error creating comment...', e);
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
    });
  }
  back() {
    this.router.navigate(['view-event-list']);
  }

}
