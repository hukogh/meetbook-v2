import { Component, NgZone } from '@angular/core';
import { Hub } from 'aws-amplify';
import { Router } from '@angular/router';
import { ViewChild } from '@angular/core';
import { LoginUserDataServiceService } from './login-user-data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  eventList: any[] = [];
  userName: string = '';
  readonly SIGN_IN = 'signIn';
  readonly SIGN_OUT = 'signOut';

  @ViewChild('auth') input: any;

  constructor(
    private router: Router,
    private zone: NgZone,
    private loginUserDataService: LoginUserDataServiceService
  ) { }

  async ngOnInit() {
    /* listen for user sign in or sign out */
    Hub.listen('auth', (data) => {         
      console.log('A new auth event has happened: ', data.payload.data.username + ' has ' + data.payload.event);

      if (this.SIGN_IN === data.payload.event) {
        console.log('payload data: ' + data.payload.data);
        this.userName = data.payload.data.username;
        this.zone.run(() => {
          // this.router.navigate(['view-event-list', {userName: this.userName}]);
          this.loginUserDataService.userName = this.userName;
          this.router.navigate(['view-event-list']);
          this.input.nativeElement.remove();
        });
      } else if (this.SIGN_OUT === data.payload.event) {
        this.userName = '';
        this.zone.run(() => {
          this.router.navigate(['sign-in']);
        });
      }
    })
  }
}
