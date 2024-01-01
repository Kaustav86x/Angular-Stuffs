import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',  // attribute
  selector: 'app-servers',
  // selector: 'app-servers',      // elememt
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  // initial state 
  serverComponent = "No server component is being set !!!";
  inputName = "hahaaha";
  
  constructor()
  {
    setTimeout(()=> {
      this.allowNewServer = true; 
    }, 1000);
  }
  ngOnInit() {
      
  }
  onServerComponentChange()
  {
    this.serverComponent = "A new component has being set !!! . The name is " + this.inputName;
  }
  onGivingInput(event : Event)
  {
    // we won't log this, we'd display it 
    // console.log(hulla);
    this.inputName = (<HTMLInputElement>event.target).value;
  }
}
