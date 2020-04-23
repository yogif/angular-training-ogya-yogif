import { Component, OnInit } from '@angular/core';
import { Member } from '../member';
import { MyAppService } from '../my-app.service';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

  members: Member[];
  constructor(private ms: MyAppService) { }

  ngOnInit() {
    this.ms
      .getMembers()
      .subscribe((data: Member[]) => {
        console.log(data)
        this.members = data;
      });
  }

  deleteMember(id, index) {
    this.ms.deleteMember(id).subscribe(res => {
      this.members.splice(index, 1);
    });
  }

}