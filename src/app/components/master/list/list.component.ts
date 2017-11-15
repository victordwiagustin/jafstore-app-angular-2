import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import { Creator } from '../../../model/creator';
import { CreatorService } from '../../../services/creator.service';
import { Item } from '../../../model/item';
import { ItemService } from '../../../services/item.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  dtOptions: DataTables.Settings = {}
  creators: Creator[] = []
  items: Item[] = []
  dtTrigger: Subject<any> = new Subject<any>()

  constructor(
    private creatorService: CreatorService,
    private itemService: ItemService
  ) { }

  ngOnInit() {
    this.onLoadCreator()
  }

  // haha(){
  //   window.location.href='http://localhost:8080/creator/file'
  // }

  onLoadCreator(){
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
    this.itemService.loadAllItem().subscribe(output=>{
      if(output){
        console.log(output)
        this.items = output
        this.dtTrigger.next()
      }
    },error=>{
      console.log(error)
    });
  }

}