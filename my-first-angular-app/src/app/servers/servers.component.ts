import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-servers]',  // attribute
  // selector: 'app-servers',      // elememt
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  
  constructor()
  {
    setTimeout(()=> {
      this.allowNewServer = true; 
    }, 1000);
  }
  ngOnInit() {
      
  }
}
