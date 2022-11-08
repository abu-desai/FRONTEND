import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IssueServiceService {
  
  private issuesdisplay:{_id:string, id:string, name:string, __v:string} [] = [];
  private updatedissuesdisplay = new Subject<{_id:string, id:string, name:string, __v:string} [] > ();

  constructor(private http: HttpClient) { }

  addissue_service(pid: string, pname: string)
  {
    this.http.post <{message:string, issue:any}> ('https://localhost:3000/api/issues', {id:pid,name:pname}) 
    .subscribe((theissue)=>
    {
    this.issuesdisplay.push(theissue.issue);
    this.updatedissuesdisplay.next([...this.issuesdisplay]);
    })
  }

getissue_service() {
  this.http.get <{message: string, issue: any}> ('https://localhost:3000/api/issues')
  .subscribe((theissue) => {
    this.issuesdisplay = theissue.issue
    this.updatedissuesdisplay.next([...this.issuesdisplay]);
  })
}

deleteissue_service(issueid: string)
{
  this.http.delete('https://localhost:3000/api/issues/' + issueid)
  .subscribe(() => 
  {
    const updatedissuesdeleted = this.issuesdisplay.filter(issue => issue._id !== issueid);
    this.issuesdisplay = updatedissuesdeleted;
    this.updatedissuesdisplay.next([...this.issuesdisplay]);
  })
}

getUpdateListener()
  {
    return this.updatedissuesdisplay.asObservable();
  }
}

