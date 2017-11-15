import { Injectable } from '@angular/core';
import { BaseUrlService } from '../base-service/base-url-service';
import { Http } from '@angular/http';
import { Item } from '../model/item';

let path: string = 'item'

@Injectable()
export class ItemService extends BaseUrlService {
  
  constructor(http: Http) {
    super(path, http)
  }

  loadAllItem() {
    return this.loadAll()
  }

  saveItem(item: Item) {
    return this.save(item)
  }

}