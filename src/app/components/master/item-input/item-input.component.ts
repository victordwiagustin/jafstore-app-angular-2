import { Component, OnInit } from '@angular/core';
import { Item } from '../../../model/item';
import { ItemService } from '../../../services/item.service';
import { Router } from '@angular/router';
import { AlertService } from '../../../services/alert.service';
import { CreatorService } from '../../../services/creator.service';
import { CategoryService } from '../../../services/category.service';
import { Category } from '../../../model/category';
import { Creator } from '../../../model/creator';

@Component({
  selector: 'app-item-input',
  templateUrl: './item-input.component.html',
  styleUrls: ['./item-input.component.css']
})
export class ItemInputComponent implements OnInit {

  item: Item = new Item()
  categories: Category[] = []
  creators: Creator[] = []

  constructor(
    private itemService: ItemService,
    private router: Router,
    private alertService: AlertService,
    private creatorService: CreatorService,
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.onLoadCategory()
    this.onLoadCreator()
  }

  onLoadCategory() {
    this.categoryService.loadAllCategory().subscribe(
      output => {
        this.categories = output
      }, error => {
        console.log("error load category\n" + error)
      }
    )
  }

  onLoadCreator() {
    this.creatorService.loadAllCreator().subscribe(
      output => {
        this.creators = output
      }, error => {
        console.log("error load creator\n" + error)
      }
    )
  }

  onItemSave() {
    this.itemService.saveItem(this.item).subscribe(
      success => {
        console.log(success)
        this.item = new Item()
        this.alertService.success('Item Input Success', true)
        this.router.navigate(['/item-list'])
      }, error => {
        console.log('Something Wrong')
        console.log(error)
        this.alertService.error('Item Input Error', true)
      }
    )
  }

}
