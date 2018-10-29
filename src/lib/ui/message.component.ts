import { Component, Input } from '@angular/core';
import { Message } from '../ngx-dialogflow-chatbot-message';

@Component({
	selector: 'chatbot-message',
	template: `
<li [ngClass]="message.type === 'user' ? 'right' : 'left'">
  <img [src]="message.avatarUrl">
  <p>{{ message.content }}</p>
</li>`,
	styles: [
		`
li {
	display: block;
	clear: both;
	float: left;
	margin: 5px 5px 5px 15px;
	width: calc(100% - 25px);
	font-size: 0.9em;
}

li img {
	width: 42px;
	height: 42px;
	border-radius: 50%;
	float: left;
	object-fit: cover;
}

li p {
	display: inline-block;
	padding: 10px 15px;
	border-radius: 20px;
	max-width: 205px;
	line-height: 130%;
}

li.left img {
	margin: 0px 8px 0 0;	
}

li.left p {
	background: #435f7a;
	color: #f5f5f5;		
}

li.right img {
	float: right;
	margin: 0px 0 0 8px;	
}

li.right p {
	background: #f5f5f5;
	float: right;
}
`
	]
})
export class MessageComponent {
	@Input() message: Message = {};
}