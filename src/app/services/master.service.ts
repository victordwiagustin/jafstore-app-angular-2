import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http";
// import { BaseUrlService } from './base-url-service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Category } from "../model/category";
import { BaseUrlService } from '../base-service/base-url-service';

@Injectable()
export class MasterService extends BaseUrlService {
  // url: string
  constructor(http: Http) {
    super('category/', http)
    // this.url = this.getUrl()
  }

  /* 'Category' Service Section */
  // urlCategory = this.url.concat('category/')

  loadAllCategory() {
    // let headers = new Headers({ 'Content-Type': 'application/json' })
    // let options = new RequestOptions({ headers: headers })
    // return this.http.get(this.urlCategory.concat('all/'), options)
    //   .map(res => res.json())
    //   .catch(this.handleError);
    return this.loadAll()
  }

  saveCategory(category: Category) {
    // let headers = new Headers({
    //   'Content-Type': 'application/json'
    // });
    // let options = new RequestOptions({ headers: headers });
    // return this.http.post(this.urlCategory.concat('add/'), category, options)
    //   .map(res => res.json())
    //   .catch(this.handleError);
    // return this.save(category)
  }


  /* 'Creator' Service Section */
  // urlCreator = this.url.concat('creator/')

  // loadAllCreator() {
  //   let headers = new Headers({ 'Content-Type': 'application/json' })
  //   let options = new RequestOptions({ headers: headers })
  //   return this.http.get(this.urlCreator.concat('all/'), options)
  //     .map(res => res.json())
  //     .catch(this.handleError);
  // }

  // saveCreator(category: Category) {
  //   let headers = new Headers({
  //     'Content-Type': 'application/json'
  //   });
  //   let options = new RequestOptions({ headers: headers });
  //   return this.http.post(this.urlCreator.concat('add/'), category, options)
  //     .map(res => res.json())
  //     .catch(this.handleError);
  // }

  // handleError(error) {
  //   console.error(error);
  //   return Observable.throw(error.json() || 'Server error');
  // }
}
