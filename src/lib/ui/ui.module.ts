import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { MessageComponent } from './message.component';
import { NgxAutoScroll } from './ngx-auto-scroll.directive';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [NgxAutoScroll, MessageComponent, LayoutComponent, HeaderComponent, FooterComponent],
  exports: [MessageComponent, LayoutComponent, HeaderComponent, FooterComponent]
})
export class UiModule { }
