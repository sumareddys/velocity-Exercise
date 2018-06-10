import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { People } from "./people";

@Injectable()
export class AppService {
   constructor(private http: Http) {
   }
   url = "./assets/data.json";
   //private peopleUrl = 'api/People';
   getUsers() {
      return this.http.get(this.url)
         .map((res: Response) => res.json())
         .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
   }
  //  getUsersDetails(people){
  //   return this.http.get('./assets/data.json?name='+peopleName)
  //        .map((res: Response) => res.json())
  //        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  //  }
}
