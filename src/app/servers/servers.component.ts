import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = true;
  serverCreationStatus = 'No Server was Created!!!'
  serverName = 'Test Server';
  UserName = 'Manideep Innamuri';
  serverCreated = false;
  servers = ['Test Server 1', 'Test Server 2']
  showSecret = false;
  logs = [];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = false;
    }, 2000)
  }

  ngOnInit() {
  }
  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server Was Created!!! and the name is " + this.serverName;
  }
  onUpdateServer(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  onClickreset() {
    this.UserName = "";
  }
  onToggleDetails() {
    this.showSecret = !this.showSecret;
    // this.logs.push(this.logs.length + 1);
    this.logs.push(new Date());
  }
}
