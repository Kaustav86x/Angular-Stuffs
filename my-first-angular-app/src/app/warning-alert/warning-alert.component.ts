import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styles: [`
  h1 
  {
    color : 	#ff8000; 
  }
  `]
})
// data binding 
export class WarningAlertComponent {
  warningCode : number = 108;
  WarningMessg = "Be Alert !!!";

  warningText()
  {
    return this.WarningMessg;
  }
}
