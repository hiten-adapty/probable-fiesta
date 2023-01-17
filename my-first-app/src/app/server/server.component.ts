import {Component} from "@angular/core";

@Component({
  selector: 'server-data',
  templateUrl: './server.component.html',
  styles: [`
    .online {
      color: antiquewhite;
    }
  `]
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'online';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'offline' : 'online';
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
  getServerStatus(){
    return this.serverStatus;
  }
}
