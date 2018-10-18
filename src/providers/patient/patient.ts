import { Http, Headers, RequestOptions } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { ProcessHttpmsgProvider } from "../process-httpmsg/process-httpmsg";
import { baseURLedr } from "../../shared/baseurl";
import "rxjs/add/operator/map";
import "rxjs/add/operator/delay";
import "rxjs/add/operator/catch";
/*
  Generated class for the PatientProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PatientProvider {
  //private retPatient: any= {};
  private username: string = "admin";
  private password: string = "admin";
  private basePath: string;
  //public test: any = {};
  constructor(
    public http: Http,
    public processHttpmsgProvider: ProcessHttpmsgProvider
  ) {
    console.log("Hello PatientProvider Provider");
  }

  getPatients(search): Observable<any> {
    var firstHeaders = new Headers();
    firstHeaders.append(
      "Authorization",
      "Basic " + btoa(this.username + ":" + this.password)
    );
    console.log("password" + btoa(this.username + ":" + this.password));
    //firstHeaders.append("Content-Type", "application/json");
    //firstHeaders.append("withCredentials", "true");

    //firstHeaders.append("Access-Control-Allow-Origin", "*");
    console.log(firstHeaders.get("Content-Type"));

    this.basePath = baseURLedr;
    const path = this.basePath + "/cxf/edrregistry/v2/fhir/" + search;
    console.log("passa url" + path);
    console.log("passa first header " + firstHeaders);

    let options = new RequestOptions({
      headers: firstHeaders,
      withCredentials: true
    });

    return this.http
      .get(path, options)
      .map(rep => {
        let patients;
        let listpatients = null;
        console.log("passage reponse brut " + rep);
        patients = this.processHttpmsgProvider.extractData(rep);
        listpatients = patients.entry;

        if (patients.entry) {
          console.log("passage return listpatient" + listpatients);

          return patients;
        } else {
          return null;
        }
      })
      .catch(error => {
        console.log("passa error fde " + error);
        return this.processHttpmsgProvider.handleError(error);
      });
  }
}
