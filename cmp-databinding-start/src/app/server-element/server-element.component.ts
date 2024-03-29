import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
  encapsulation: ViewEncapsulation.Emulated  //None, ShadowDom will also work
})
export class ServerElementComponent implements OnInit {
  @Input('halumElement') element : {type: string, name: string, content: string};

  constructor() {

  }
  
  ngOnInit() {
      
  }
}
