import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: `./servers.component.html`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = false;
  serverName='';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000)
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = true;

  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value
  }
}
