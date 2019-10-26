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

  toggleServerStatus () {
    this.statusFlag = !this.statusFlag;
    if(this.statusFlag === true) {
      this.ServerStatus = 'online'
    }
    return this.ServerStatus;
  }
}
