
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiAiClient } from 'api-ai-javascript';
import { Message } from './ngx-dialogflow-chatbot-message';

@Injectable({
  providedIn: 'root'
})
export class NgxDialogflowChatbotService {

  private client: any;
  private bot: string;
  private user: string;

  public conversation = new BehaviorSubject<Message[]>([]);

  constructor() { }

  initilize(token: string, user: string, bot: string) {
    this.client = new ApiAiClient({ accessToken: token });
    this.user = user;
    this.bot = bot;
  }

  converse(msg: string) {

    this.conversation.next([new Message(msg, this.user, 'user')]);
    let respMessage = new Message('...', this.bot, 'bot');
    this.conversation.next([respMessage]);

    if (this.client && this.client.textRequest) {
      return this.client.textRequest(msg)
        .then(res => {
          respMessage.content = res.result.fulfillment.speech;
        });
    }
    else {
      respMessage.content = "DialogFlow API Client is not initialized";
    }
  }

}