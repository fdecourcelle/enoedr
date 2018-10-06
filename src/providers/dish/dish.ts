import { Injectable } from "@angular/core";
import { Dish } from "../../shared/dish";
import { Observable } from "rxjs/Observable";
import { Http ,Headers, } from "@angular/http";
import { baseURL } from "../../shared/baseurl";
import { ProcessHttpmsgProvider } from "../process-httpmsg/process-httpmsg";
import "rxjs/add/operator/map";
import "rxjs/add/operator/delay";
import "rxjs/add/operator/catch";

/*
  Generated class for the DishProvider provider.
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DishProvider {
  patient : any;

   httpOptions = {
    headers: new Headers({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };


  constructor(
    public http: Http,
    private processHTTPMsgService: ProcessHttpmsgProvider
  ) {
    this.http.options ; 
  }

  getDishes(): Observable<Dish[]> {
    return this.http
      .get(baseURL + "dishes")
      .map(res => {
        return this.processHTTPMsgService.extractData(res);
      })
      .catch(error => {
        return this.processHTTPMsgService.handleError(error);
      });
  }

  getDish(id: number): Observable<Dish> {
    return this.http
      .get(baseURL + "dishes/" + id)
      .map(res => {
        return this.processHTTPMsgService.extractData(res);
      })
      .catch(error => {
        return this.processHTTPMsgService.handleError(error);
      });
  }

  getFeaturedDish(): Observable<Dish> {
    //let headers = new Headers();
    //const param = new HttpParams().set('username', username).set('password', password);
    //headers.append('Content-Type', 'application/json');
    return this.http
      .get(baseURL + "dishes?featured=true")
     // .get(baseURL+ "Patient", this.httpOptions)
      .map(res => {
        return this.processHTTPMsgService.extractData(res)[0];
      })
      .catch(error => {
        return this.processHTTPMsgService.handleError(error);
      });
  }
}
