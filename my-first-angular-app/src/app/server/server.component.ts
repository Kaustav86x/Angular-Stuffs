import { Component, OnInit } from "@angular/core";

// a decorator is a ts feature used to enhance the elemenets we use in our code...
@Component({
    selector : 'app-server', // element
    templateUrl: './server.component.html'
})

export class ServerComponent implements  OnInit {

    // isUserNameEmpty = false;
    username = "";
    // output = "Nothing to see here !!";

    ngOnInit() {
        
    }
    OnGivivngUserNameInput()
    {
        this.username;
        this.username = "";
    }
}