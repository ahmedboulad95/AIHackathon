import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class DataService {

  public baseUrl:string = 'http://ec2-13-59-161-205.us-east-2.compute.amazonaws.com:3000/api/topFiveCities?brand=';

  constructor(public http:Http) { }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
      .pipe(map(res => res.json()));
  }

  getStoreBarInfo(selectedStore) {
    console.log(this.baseUrl + selectedStore);

    //return this.http.get(this.baseUrl + selectedStore, {'data': ''}).pipe(res => res.text(), err => this.err = err);
  }
}
