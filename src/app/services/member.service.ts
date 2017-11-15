import { Injectable } from '@angular/core';
import { BaseUrlService } from '../base-service/base-url-service';
import { Http } from '@angular/http';

let path: string = 'member'

@Injectable()
export class MemberService extends BaseUrlService{

  constructor(http: Http) { 
    super(path, http);
  }

}
