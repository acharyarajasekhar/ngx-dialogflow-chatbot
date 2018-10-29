import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'chatbot-footer',
    template: `
<nav class="navbar navbar-dark bg-dark mt-5 fixed-bottom no-padding">
  <div class="message-input">
      <div class="wrap">
          <input type="text" [(ngModel)]="message" placeholder="Write your message..." (keydown.enter)="onEnter($event)">
          <button class="submit"><i class="fa fa-paper-plane" aria-hidden="true" (click)="sendMessage()"></i></button>
      </div>
  </div>
</nav>`,
    styles: [
        `.message-input {
      width: 100%;
  }
  
  .no-padding {
      padding: 0px;
  }
  
  .message-input .wrap input {
      font-family: "proxima-nova", "Source Sans Pro", sans-serif;
      float: left;
      border: none;
      width: calc(100% - 50px);
      padding: 14px 10px 14px 10px;
      font-size: 0.8em;
      color: #32465a;
      border-top: 1px solid lightgray;
  }
  
  .message-input .wrap button {
      float: right;
      border: none;
      width: 50px;
      padding: 12px 0;
      cursor: pointer;
      background: #32465a;
      color: #f5f5f5;
  }
  
  textarea:focus, input[type="text"]:focus, input[type="password"]:focus, input[type="datetime"]:focus, input[type="datetime-local"]:focus, input[type="date"]:focus, input[type="month"]:focus, input[type="time"]:focus, input[type="week"]:focus, input[type="number"]:focus, input[type="email"]:focus, input[type="url"]:focus, input[type="search"]:focus, input[type="tel"]:focus, input[type="color"]:focus, .uneditable-    input:focus {
      outline: none;
  }
  
  .mt-5, .my-5 {
      margin-top: 0px;
  }`
    ]
})
export class FooterComponent {

    message: string;
    @Output() onSendMessage = new EventEmitter();

    sendMessage() {
        if (this.message && this.message.length > 0) {
            this.onSendMessage.emit(this.message);
            this.message = '';
        }
    }

    onEnter(event) {
        console.log("On Enter");
        this.sendMessage();
    }
}
