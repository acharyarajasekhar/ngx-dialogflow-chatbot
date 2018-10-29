import { Component, Input } from '@angular/core';
import { Message } from './ngx-dialogflow-chatbot-message';
import { NgxDialogflowChatbotService } from './ngx-dialogflow-chatbot.service';
import { Observable } from 'rxjs';
import { scan } from 'rxjs/operators';

@Component({
    selector: 'ngx-dialogflow-chatbot',
    template: `
<chatbot-layout [logoUrl]="logoUrl" [title]="title" (onSendMessage)="converse($event)">
    <ng-container *ngFor="let msg of messages | async">
        <chatbot-message [message]="msg"></chatbot-message>
    </ng-container>
</chatbot-layout>
  `,
    styles: []
})
export class NgxDialogflowChatbotComponent {    

    @Input() logoUrl: string = 'https://lh4.googleusercontent.com/proxy/HnNSQi9CR-N2ezU28NX38XylJYK0sFywUnU3RZtorXIpMwIJQAIBN4A7XmpE63DZN0dOTF1MJF7wcA304yRVp66M5hSvdAx_ypBgXZK94avk8YmsL2RWFnbK3tzzBEeofXatSrfqbK6PtVnpP8fGTq6VyoN-25OEHLuk335boNLhIF1dqHA9weCXsilA6HrYDDzNTc47Qii2XfCWAafMe1yoqoeS_Gw3ymMPWZ1N06lTdVfW5n-s4VxmK5dspShYBfM=w5000-h5000';
    @Input() title: string = 'ChatBot';
    @Input() token: string;
    @Input() userAvatarUrl: string = 'https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1';
    @Input() botAvatarUrl: string = 'https://cdn-images-1.medium.com/max/1200/0*oz2e-hQtsHOWzoB4.';

    messages: Observable<Message[]>;

    constructor(private dialogFlowSvc: NgxDialogflowChatbotService) {

        this.messages =
            this.dialogFlowSvc
                .conversation
                .asObservable()
                .pipe(scan((acc, val) => acc.concat(val)));       

    }

    ngOnInit() {
        this.dialogFlowSvc.initilize(this.token, this.userAvatarUrl, this.botAvatarUrl);
    }

    converse(message) {
        this.dialogFlowSvc.converse(message)
    }

}