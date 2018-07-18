import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  url:string = 'http://localhost:4200';

  constructor(private http: HttpClient) { }

  contact(data) {
    // return this.http.post(this.url, data).toPromise();
    // mock api
    return Promise.resolve({});
  }
}
