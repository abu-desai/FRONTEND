import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IssueCreateComponent } from './issue/issue-create/issue-create.component';
import { IssueDisplayComponent } from './issue/issue-display/issue-display.component';

@NgModule({
  declarations: [
    AppComponent,
    IssueCreateComponent,
    IssueDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
