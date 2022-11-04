import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-issue-create',
  templateUrl: './issue-create.component.html',
  styleUrls: ['./issue-create.component.css']
})
export class IssueCreateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onaddissue(issueform: NgForm){
    if (issueform.invalid)
    {
      alert('Invalid')
      return
    }
    alert(issueform.value.enteredID+':'+issueform.value.enteredName)
  }

}
