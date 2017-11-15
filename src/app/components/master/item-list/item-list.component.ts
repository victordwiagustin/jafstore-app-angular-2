import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Rx';
import { Item } from '../../../model/item';
import { ItemService } from '../../../services/item.service';
import 'rxjs/add/operator/map';
import { AlertService } from '../../../services/alert.service';
import { Router } from '@angular/router';

export const itemListPath: string = 'item-list'

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  dtOptions: DataTables.Settings = {}
  items: Item[] = []
  dtTrigger: Subject<any> = new Subject<any>()

  constructor(
    private itemService: ItemService,
    private alertService: AlertService,
    private router: Router
  ) { }

  ngOnInit() {
    this.onLoadItem()
  }

  onLoadItem() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      searching: false
    };
    this.itemService.loadAll().subscribe(
      output => {
        if (output) {
          console.log(output)
          this.items = output
          this.dtTrigger.next()
        }
      }, error => {
        console.log(error)
      });
  }

  onDeleteItem(item: Item) {
    this.itemService.delete(item.id).subscribe(
      success => {
        this.alertService.success('Delete Success ' + item.name, true)
        if (success) {
          this.onLoadItem()
        }
      }, error => {
        this.alertService.error('Delete Error ' + item.name, true)
        console.log(error)
      }
    )
  }

}
