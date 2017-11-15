import { Component, OnInit } from '@angular/core';
import { Member } from '../../../model/member';
import { Router } from '@angular/router';
import { MemberService } from '../../../services/member.service';
import { AlertService } from '../../../services/alert.service';

@Component({
  selector: 'app-member-input',
  templateUrl: './member-input.component.html',
  styleUrls: ['./member-input.component.css']
})
export class MemberInputComponent implements OnInit {

  member: Member = new Member()
  constructor(
    private router: Router,
    private memberService: MemberService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
  }

  onMemberSave() {
    this.memberService.save(this.member)
    .subscribe(
      success => {
        if(success) {
          console.log("success member")
          this.member = new Member()
          this.alertService.success("Success Register Member", true)
          this.router.navigate(['/item-list'])
        }
      }, error => {
        console.log(error + "\nError Ndes")
        this.alertService.success("Register Member Failed", true)
      }
    )
  }

}
