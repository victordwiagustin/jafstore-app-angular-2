import { Component, OnInit } from '@angular/core';
import { Item } from '../../../model/item';
import { Router } from '@angular/router';
import { AlertService } from '../../../services/alert.service';
import { ItemService } from '../../../services/item.service';

@Component({
  selector: 'app-item-ngx-pagination',
  templateUrl: './item-ngx-pagination.component.html',
  styleUrls: ['./item-ngx-pagination.component.css']
})
export class ItemNgxPaginationComponent implements OnInit {

  items: Item[] = [] 

  constructor(
    private itemService: ItemService,
    private alertService: AlertService,
    private router: Router
  ) { }

  ngOnInit() {
    this.onLoadItem()
  }

  onLoadItem() {
    this.itemService.loadAll().subscribe(
      output => {
        if (output) {
          console.log(output)
          this.items = output
        }
      }, error => {
        console.log(error)
      });
  }
}
