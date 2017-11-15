import { Http, RequestOptions, Headers } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { API } from "../app.url-api";

export class BaseUrlService {
  
  url: string = API

  public item: string = 'item'

  constructor(nextUrl: string, private http: Http) {
    nextUrl = nextUrl.slice(-1) == '/' ? nextUrl : nextUrl.concat('/')
    this.url += nextUrl
  }

  // getUrl() {
  //   return this.url
  // }

  loadAll() {
    let headers = new Headers({ 'Content-Type': 'application/json' })
    let options = new RequestOptions({ headers: headers })
    return this.http.get(this.url.concat('all/'), options)
      .map(res => res.json())
      // .catch(this.handleError);
  }

  save(
    // objectName: string, 
    object: object
  ) {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.url.concat('add/'),
    // { objectName : object },
    object,
    options)
    // return this.http.post(this.url.concat('add/'), JSON.stringify(object || null), options)
      // .map(res => res.json())
      // .catch(this.handleError);
  }

  delete(id: number) {
    let headers = new Headers({ 'Content-Type': 'application/json' })
    let options = new RequestOptions({ headers: headers })
    return this.http.delete(this.url.concat('delete/') + id , options)
  }

  // handleError(error) {
  //   console.error(error);
  //   return Observable.throw(error.json() || 'Server error');
  // }

}
