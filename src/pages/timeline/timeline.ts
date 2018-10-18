import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { PatientProvider } from "../../providers/patient/patient";
import { PdfViewerModule } from "ng2-pdf-viewer";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";

/**
 * Generated class for the TimelinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-timeline",
  templateUrl: "timeline.html"
})
export class TimelinePage {
  public listDocument: any = {};
  public errMess: any;
  public myInput: string = "";
  public pdf: Uint8Array;
  public pdfSrc: Observable<any>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public patientService: PatientProvider,
    public pdfWiever: PdfViewerModule,
    public http: HttpClient
  ) {}

  ionViewDidLoad() {
    console.log("timeline" + this.pdfSrc);
    this.patientService
      .getPatients("DiagnosticReport" + this.myInput)
      .subscribe(
        listDocument => (this.listDocument = listDocument),
        errmess => (this.errMess = <any>errmess)
      );
  }
  pdfConstruct(pdfRaw: any) {
    this.pdf = this.convertDataURIToBinary(pdfRaw);
  }

  convertDataURIToBinary(dataURI: string) {
    var raw = window.atob(dataURI);
    var rawLength = raw.length;
    var array = new Uint8Array(new ArrayBuffer(rawLength));

    for (var i = 0; i < rawLength; i++) {
      array[i] = raw.charCodeAt(i);
    }
    return array;
  }
}
