import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxAutoSmoothScrollDownModule } from 'ngx-auto-smooth-scrolldown';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { MessageComponent } from './message.component';

@NgModule({
  imports: [CommonModule, FormsModule, NgxAutoSmoothScrollDownModule],
  declarations: [MessageComponent, LayoutComponent, HeaderComponent, FooterComponent],
  exports: [MessageComponent, LayoutComponent, HeaderComponent, FooterComponent]
})
export class UiModule { }
