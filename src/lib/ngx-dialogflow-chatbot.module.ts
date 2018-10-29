import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgxDialogflowChatbotComponent } from './ngx-dialogflow-chatbot.component';
import { NgxDialogflowChatbotService } from './ngx-dialogflow-chatbot.service';
import { UiModule } from './ui/ui.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, UiModule],
  declarations: [NgxDialogflowChatbotComponent],
  exports: [NgxDialogflowChatbotComponent],
  providers: [NgxDialogflowChatbotService]
})
export class NgxDialogflowChatbotModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxDialogflowChatbotModule,
      providers: [
        NgxDialogflowChatbotService
      ]
    };
  }
}
