import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IssueServiceService } from '../issue-service.service';

@Component({
  selector: 'app-issue-display',
  templateUrl: './issue-display.component.html',
  styleUrls: ['./issue-display.component.css']
})
export class IssueDisplayComponent implements OnInit {
  issues: {_id: string, id: string, name: string, _v: string}[] = [];

  constructor(public issueservice: IssueServiceService) {}

  private issuesubscription!: Subscription;
      ngOnInit() {
        this.issueservice.getissue_service();
        this.issuesubscription = this.issueservice.getUpdateListener()
        .subscribe((issues:{ _id: string, id:string, name: string, _v:string}[])=>
        {
          this.issues = issues;
        });
      }

  ngOnDestroy()
  {
  this.issuesubscription.unsubscribe();
  }
  ondelete(issueid: string) {
  this.issueservice.deleteissue_service(issueid)
  }

}
