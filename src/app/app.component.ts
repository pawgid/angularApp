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
  flag = true;
  anotherName = ['Pawel', 'Krzysztof', 'Hermiona'];
  currentName = '';
  numberOfClicks = 0;
  pColor = 'black';
  pStyle = 'black';

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

  toggleFlag() {
    this.flag = !this.flag;
    return this.flag;
  }

  getColor() {
    if(this.flag == true) {
      return 'green'
    } else {
      return 'red'
    }
  }

  addName() {
    this.anotherName.push(this.currentName);
  }

  getRandomColor() {
    this.numberOfClicks = this.numberOfClicks+1;
    var color = Math.floor(Math.random() * 16777216).toString(16);
    this.pColor = '#000000'.slice(0, -color.length) + color;
    if(this.numberOfClicks > 5) {
        this.pStyle = 'red'
    }
    return this.pColor;   
  }
}
