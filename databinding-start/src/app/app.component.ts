import {Component, DoCheck, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck{
  serverElements = [{type: 'server', name: 'TestServer', content: 'Angular Test Server'}];
  @ViewChild('sampleText', {static: true}) randomTextChanger: ElementRef;

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  onChangeFirst() {
    if (this.serverElements[0]) {
      this.serverElements[0].name = 'Changed!';
    }
  }

  onDestroyFirst() {
    if(this.serverElements[0]) {
      this.serverElements.splice(0, 1);
    }
  }

  changeText() {
    console.log(this.randomTextChanger.nativeElement.textContent)
  }

  ngDoCheck() {
    console.log('doCheck of app.component')
  }
}
