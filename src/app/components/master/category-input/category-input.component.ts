import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../../../model/category';
import { Router } from '@angular/router';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-category-input',
  templateUrl: './category-input.component.html',
  styleUrls: ['./category-input.component.css']
})
export class CategoryInputComponent implements OnInit {
  category: Category = new Category();

  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onCategorySave() {
    this.categoryService.saveCategory(this.category)
      .subscribe(
        success => {
          console.log(success);
          this.category = new Category();
          // this.router.navigate(["list-category"]);
        }, error => {
          console.log(error);
        }
      );
  }

}
