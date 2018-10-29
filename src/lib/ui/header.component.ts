import { Component, Input } from '@angular/core';

@Component({
  selector: 'chatbot-header',
  template: `
<nav class="navbar navbar-light bg-light">
  <a class="navbar-brand" href="/"><img class="logo" [src]="logoUrl"
      height="40"> {{ title }}</a>
</nav>`,
  styles: []
})
export class HeaderComponent {
  @Input() logoUrl: string = 'https://lh4.googleusercontent.com/proxy/HnNSQi9CR-N2ezU28NX38XylJYK0sFywUnU3RZtorXIpMwIJQAIBN4A7XmpE63DZN0dOTF1MJF7wcA304yRVp66M5hSvdAx_ypBgXZK94avk8YmsL2RWFnbK3tzzBEeofXatSrfqbK6PtVnpP8fGTq6VyoN-25OEHLuk335boNLhIF1dqHA9weCXsilA6HrYDDzNTc47Qii2XfCWAafMe1yoqoeS_Gw3ymMPWZ1N06lTdVfW5n-s4VxmK5dspShYBfM=w5000-h5000';
  @Input() title: string = 'ChatBot';
}