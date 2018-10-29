
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ApiAiClient } from 'api-ai-javascript';
import { Message } from './ngx-dialogflow-chatbot-message';

@Injectable({
  providedIn: 'root'
})
export class NgxDialogflowChatbotService {

  private client: any;
  private bot: string;
  private user: string;
  
  public uiUpdate = new Subject<void>();

  public conversation = new BehaviorSubject<Message[]>([]);

  constructor() { }

  initilize(token: string, user: string, bot: string) {
    this.client = new ApiAiClient({ accessToken: token });
    this.user = user;
    this.bot = bot;
  }

  converse(msg: string) {

    const userMessage = new Message(msg, this.user, 'user');
    this.update(userMessage);
    let respMessage = new Message('...', this.bot, 'bot');
    this.update(respMessage);

    if (this.client && this.client.textRequest) {
      return this.client.textRequest(msg)
        .then(res => {
          const speech = res.result.fulfillment.speech;
          respMessage.content = speech;
          this.uiUpdate.next();
        });
    }
    else {
      respMessage.content = "DialogFlow API Client is not initialized";
    }
  }

  private update(msg: Message) {
    this.conversation.next([msg]);
  }

}