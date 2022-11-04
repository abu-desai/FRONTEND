import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IssueCreateComponent } from './issue/issue-create/issue-create.component';

@NgModule({
  declarations: [
    AppComponent,
    IssueCreateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
