import { Component, OnInit } from '@angular/core';
import { APIService } from '../API.service';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { CreateEventDialogComponent } from '../create-event-dialog/create-event-dialog.component';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { EventDataService } from '../event-data.service';
import { LoginUserDataServiceService } from '../login-user-data-service.service';

@Component({
  selector: 'app-view-event-list',
  templateUrl: './view-event-list.component.html',
  styleUrls: ['./view-event-list.component.scss']
})
export class ViewEventListComponent implements OnInit {

  readonly SIGN_IN = 'signIn';
  readonly SIGN_OUT = 'signOut';

  eventList: any[] = [];
  userName: string | null = '';
  viewEventList = false;
  eventParticipantCount = new Map();

  cols = [
    {field: 'name', header: 'Event Name'},
    {field: 'type', header: 'Type'},
    {field: 'venue', header: 'Venue'},
    {field: 'hostName', header: 'Host Name'},
    {field: 'startDt', header: 'Start Date'},
    {field: 'endDt', header: 'End Date'},
    {field: 'participantCount', header: 'Participants'},
    {field: 'description', header: 'Description'}
  ];

  constructor(
    private api: APIService, 
    private dialog: MatDialog,
    // private activatedRoute: ActivatedRoute,
    private loginUserDataService: LoginUserDataServiceService,
    private router: Router,
    private eventDataService: EventDataService
  ) { }

  ngOnInit() {
    console.log('loading view-event-list');

     /* fetch events*/
     this.api.ListEvents().then(eventRes => {
      if (eventRes.items) {
        this.eventList = eventRes.items;
      }
      this.api.ListEventParticipants().then(eventParticipantsRes => {
        let eventParticipants: any[] = [];
        if (eventParticipantsRes && eventParticipantsRes.items) {
          eventParticipants = eventParticipantsRes.items;
        }
        this.eventList.forEach(event => {
          const participantsCount = eventParticipants.filter(
            participant => event['id'] === participant['eventId']).length;
            this.eventParticipantCount.set(event['id'], participantsCount);
        });
      })
    });

    /* subscribe to new events being created */
    this.api.OnCreateEventListener.subscribe((event: any) => {
      const newEvent = event.value.data.onCreateEvent;
      if (this.eventList) {
        this.eventList = [newEvent, ...this.eventList];
      } else {
        this.eventList = [newEvent];
      }
    });

    // this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
    //   console.log('params: ' + params.get('userName'));
    //   this.userName = params.get('userName');
    // });
    this.userName = this.loginUserDataService.userName;
    console.log('username: ' + this.userName);
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      hostName: this.userName
    }

    this.dialog.open(CreateEventDialogComponent, dialogConfig);
  }

  navigateToViewEvent(rowData: any) {
    this.eventDataService.createEventData(rowData);
    this.router.navigate(['view-event']);
  }

}
