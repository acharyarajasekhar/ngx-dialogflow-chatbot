import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'chatbot-layout',
  template: `
  <chatbot-header [logoUrl]="logoUrl" [title]="title"></chatbot-header>
  <div class="chat-container">
    <div class="messages" ngx-auto-smooth-scrolldown lock-y-offset="100">
      <ul>  
          <ng-content></ng-content>
      </ul>
    </div>
  </div>
  <chatbot-footer (onSendMessage)="onSendMessage.emit($event)"></chatbot-footer>`,
  styles: [
    `
.chat-container {
  height: auto;
  background: #E6EAEA;  
}
.messages {
  height: calc(100vh - 114px);
  overflow-y: scroll;
  overflow-x: hidden;
}
ol, ul {
  list-style: none;
}
ul {
  padding: 0px;
  padding-top: 16px;
}
.messages::-webkit-scrollbar {
  width: 5px;
  background: transparent;
}
.messages::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.3);
}
`
  ]
})
export class LayoutComponent {
  @Input() logoUrl: string = 'https://lh4.googleusercontent.com/proxy/HnNSQi9CR-N2ezU28NX38XylJYK0sFywUnU3RZtorXIpMwIJQAIBN4A7XmpE63DZN0dOTF1MJF7wcA304yRVp66M5hSvdAx_ypBgXZK94avk8YmsL2RWFnbK3tzzBEeofXatSrfqbK6PtVnpP8fGTq6VyoN-25OEHLuk335boNLhIF1dqHA9weCXsilA6HrYDDzNTc47Qii2XfCWAafMe1yoqoeS_Gw3ymMPWZ1N06lTdVfW5n-s4VxmK5dspShYBfM=w5000-h5000';
  @Input() title: string = 'ChatBot';
  @Output() onSendMessage = new EventEmitter();
}