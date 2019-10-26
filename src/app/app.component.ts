import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Pawel';
  ServerName = 'Apollo';
  ServerPID = 11;
  ServerStatus = 'offline';
  statusFlag = false;
  buttonState = true;
  firstName = 'Pawel';
  state = false;

  constructor() {
    setTimeout(() => {
      this.buttonState = false;
    }, 2500);
  }

  toggleServerStatus () {
    this.statusFlag = !this.statusFlag;
    if(this.statusFlag === true) {
      this.ServerStatus = 'online'
    } else {
      this.ServerStatus = 'offline'
    }
    return this.ServerStatus;
  }

  resetTheName() {
    this.firstName = ''
  }

  checkName() {
    if(this.firstName === '') {
      this.state = true;
      return this.state;
    }
  }
}
