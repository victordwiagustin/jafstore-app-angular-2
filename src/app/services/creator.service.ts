import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Creator } from '../model/creator';
import { BaseUrlService } from '../base-service/base-url-service';

let path: string = 'creator'

@Injectable()
export class CreatorService extends BaseUrlService {

  constructor(http: Http) {
    super(path, http);
  }

  loadAllCreator() {
    return this.loadAll()
  }

  saveCreator(creator: Creator) {
    return this.save(creator)
  }

}
