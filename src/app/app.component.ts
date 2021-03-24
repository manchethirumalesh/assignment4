import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment4';

  constructor() { }

  ngOnInit(): void {
  }

  text : any

  receiveMessage($event: any){

    this.text = $event

  }

}
