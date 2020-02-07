import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = true;
  serverCreationStatus = 'No Server was Created!!!'
  serverName='';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = false;
    }, 2000)
  }

  ngOnInit() {
  }
  onCreateServer() {
    this.serverCreationStatus = "Server Was Created!!!";
  }
  onUpdateServer(event: Event) {
    this.serverName=(<HTMLInputElement>event.target).value;
  }
}
