import { Component } from '@angular/core';

@Component({
  //Used to select the element of that name
  selector: 'app-servers',

  //Used when selecting the attribute
  // selector: '[app-servers]',

  //Used when selecting the class name
  // selector: '.app-servers',

  //template or templateURL should be present
  // template: '<server-data></server-data>',
  templateUrl: './servers.component.html',

  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server was created.'
  serverName = '';
  userName = '';
  serverCreated = false;
  servers = ['TestServer1', 'TestServer2'];
  showSecret = false;
  log:any = [];
  constructor() {
    setTimeout(()=>{
      this.allowNewServer = true;
    },2000);
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name : ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onUpdateUsername (event:any) {
    this.userName = (<HTMLInputElement>event.target).value;
  }

  onToggleDisplay() {
    this.showSecret = !this.showSecret;
    this.log.push(Date.now());
  }

  ngOnInit(){

  }
}
