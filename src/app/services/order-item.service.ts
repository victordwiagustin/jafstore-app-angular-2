import { Injectable } from '@angular/core';
import { BaseUrlService } from '../base-service/base-url-service';
import { Http } from '@angular/http';

let path: string = 'order'

@Injectable()
export class OrderItemService extends BaseUrlService {

  constructor(
    http: Http
    // path: string = 'order'
  ) {
    super(path, http)
  }

}
