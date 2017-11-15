import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions, } from '@angular/http';
import { PagerService } from '../../../services/pager.service';

import 'rxjs/add/operator/map'

import * as _ from 'underscore';
import { ItemService } from '../../../services/item.service';
import { Item } from '../../../model/item';

@Component({
  selector: 'app-item-paging',
  templateUrl: './item-paging.component.html',
  styleUrls: ['./item-paging.component.css']
})
export class ItemPagingComponent implements OnInit {

  constructor(
    private http: Http, 
    private pagerService: PagerService,
    private itemService: ItemService
  ) { }

  // array of all items to be paged
  private allItems: any[];

  private items: Item[] = []

  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];

  ngOnInit() {
    // get dummy data
    // this.http.get('./dummy-data.json')
    //   .map((response: Response) => response.json())
    //   .subscribe(data => {
    //     // set items to json response
    //     this.allItems = data;

    //     // initialize to page 1
    //     this.setPage(1);
    //   });

    this.onLoadItem()
  }

  onLoadItem() {
    this.itemService.loadAll()
    // .map((response: Response) => response.json())
    .subscribe(
      output => {
        if (output) {
          console.log(output)
          this.items = output
          this.setPage(1)
        }
      }, error => {
        console.log(error)
      });
    
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }

    // get pager object from service
    // this.pager = this.pagerService.getPager(this.allItems.length, page);

    // // get current page of items
    // this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);\

    this.pager = this.pagerService.getPager(this.items.length, page);
    this.pagedItems = this.items.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

}
