import { Component } from '@angular/core';

@Component({
  selector: 'app-assignmentment-component',
  templateUrl: './assignmentment-component.component.html',
  styleUrl: './assignmentment-component.component.css'
  // styles : [`
  // col {
  //   color: white;
  // }`]
})
export class AssignmentmentComponentComponent {
  showSecret : boolean = true;
  log = [];

  onToggleDetails()
  {
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1);
  }
}
