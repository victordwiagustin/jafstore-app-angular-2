import { Component, OnInit } from '@angular/core';
import { Creator } from '../../../model/creator';
import { CreatorService } from '../../../services/creator.service';
import { Router } from '@angular/router';
import { AlertService } from '../../../services/alert.service';

@Component({
  selector: 'app-creator-input',
  templateUrl: './creator-input.component.html',
  styleUrls: ['./creator-input.component.css']
})
export class CreatorInputComponent implements OnInit {

  creator: Creator = new Creator()

  constructor(
    private creatorService: CreatorService,
    private router: Router,
    private alertService: AlertService
  ) { }

  ngOnInit() {
  }

  onCreatorSave() {
    this.creatorService.saveCreator(this.creator).subscribe(
      success => {
        console.log(success)
        this.creator = new Creator()
        this.alertService.success('Data Input Success', true)
        this.router.navigate(['/list'])
      }, error => {
        console.log('Something Wrong')
        console.log(error)
      }
    )
  }

}
