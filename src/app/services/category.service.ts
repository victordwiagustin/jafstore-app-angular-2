import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Category } from "../model/category";
import { BaseUrlService } from '../base-service/base-url-service';

let path: string = 'category/'

@Injectable()
export class CategoryService extends BaseUrlService {
  
  constructor(http: Http) {
    super(path, http)
  }

  loadAllCategory() {
    return this.loadAll()
    // .catch(this.handleError)
  }

  saveCategory(category: Category) {
    return this.save(category)
    // .catch(this.handleError)
  }

}
