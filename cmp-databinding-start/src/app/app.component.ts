import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // serverElements is a varible containing a value as a javascript object
  serverElements = [{type: 'server', name: 'Testserver', content: 'Just a test !'}];
  // newServerName = '';
  // newServerContent = '';
  // passing a variable to the method which is a javascript object
  onServerAdded(serverData : {serverName: string, serverContent: string}) {
    // serverElements is from app.component.ts and not from this file so we'll use 'Binding to custom events'  
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(serverBluePrint : {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: serverBluePrint.serverName,
      content: serverBluePrint.serverContent
    });
  }
}
