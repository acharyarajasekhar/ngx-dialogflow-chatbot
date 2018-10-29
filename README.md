# Angular 2+ DialogFlow ChatBot - Out Of Box Library

## Installation

npm install ngx-dialogflow-chatbot

## Usage

#### In module:

```typescript
import { NgxDialogflowChatbotModule } from 'ngx-dialogflow-chatbot';

@NgModule({
  ...
  imports: [
    ...
	NgxDialogflowChatbotModule,
	...
  ],
  ...
})
export class AppModule { }
```

#### In template:

```html
<ngx-dialogflow-chatbot 
    logoUrl="assets/logo.png" 
    title="ChatBot"
    [token]="DIALOG_FLOW_TOKEN"
    userAvatarUrl="assets/user.png"
    botAvatarUrl="assets/bot.jpg">
</ngx-dialogflow-chatbot>
```