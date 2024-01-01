import { Component, OnInit } from "@angular/core";

// a decorator is a ts feature used to enhance the elemenets we use in our code...
@Component({
    selector : 'app-server', // element
    templateUrl: './server.component.html',
    styles: [`
    .online {
        color : white;
    }`]
})

// export class ServerComponent implements  OnInit {

//     // isUserNameEmpty = false;
//     username = "";
//     // output = "Nothing to see here !!";

//     ngOnInit() {
        
//     }
//     OnGivivngUserNameInput()
//     {
//         this.username;
//         this.username = "";
//     }
// }
export class ServerComponent 
{
    serverId : number = 10;
    serverStatus : string = 'offline';

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }
    getServerStatus()
    {
        this.serverStatus;
    }
    getColor() {
        return this.serverStatus ===  'online' ? 'green' : 'red';
    }
}