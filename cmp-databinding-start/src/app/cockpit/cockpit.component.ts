import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent implements OnInit{
  // we've added the events of the same name inside app.component.ts so we need to use 'EventEmitter'
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  newServerName = '';
  newServerContent = '';
  constructor() {

  }
  ngOnInit(){
  }

  onAddServer(InputServer){
    // this returns the whole input tag from where the input data is coming
    console.log(InputServer.value);
    this.serverCreated.emit({
      serverName: this.newServerName, 
      serverContent: this.newServerContent
    })
  }

  onAddBlueprint(){
    this.blueprintCreated.emit({
      serverName: this.newServerName, 
      serverContent: this.newServerContent
    })
  }
}
