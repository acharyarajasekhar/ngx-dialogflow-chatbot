export class Message {
    content?: string;
    type?: string;
    avatarUrl?: string;
    constructor(content, avatarUrl, type) {
        this.content = content;
        this.avatarUrl = avatarUrl || 'http://emilcarlsson.se/assets/mikeross.png';
        this.type = type;
    }
}