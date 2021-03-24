import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-c5',
  templateUrl: './c5.component.html',
  styleUrls: ['./c5.component.css']
})
export class C5Component implements OnInit {

  constructor() { }

  text : any = 'ABC 123'

  @Output() messageEvent = new EventEmitter<any>()

  ngOnInit(): void {
    this.sendMessage()
  }

  sendMessage(){
    this.messageEvent.emit(this.text)
  }

}
