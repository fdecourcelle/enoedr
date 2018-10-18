import { Component, OnInit } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { PatientProvider } from "../../providers/patient/patient";
import { PatientdetailsPage } from "../../pages/patientdetails/patientdetails";

/*

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-contact",
  templateUrl: "contact.html"
})
export class ContactPage implements OnInit {
  private listPatient: any = {};
  public myInput: string;
  public errMess: string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private patientService: PatientProvider
  ) {
    //this.http.options (baseURL,this.httpOptions) ;
  }

  ionViewDidLoad() {}
  ngOnInit() {
    /* console.log("ionViewDidLoad ContactPage");
    this.patientService
      .getPatients(this.myInput)
      .subscribe(
        listPatient => (this.listPatient = listPatient),
        errmess => (this.errMess = <any>errmess)
      );
      */
  }
  onInput(event) {
    if (this.myInput.length < 3) {
      this.listPatient = {};
      return;
    }

    this.patientService
      .getPatients("Patient?_content=" + this.myInput)
      .subscribe(
        listPatient => (this.listPatient = listPatient),
        errmess => (this.errMess = <any>errmess)
      );
  }

  patientSelected(event, Patient) {
    // That's right, we're pushing to ourselves!

    this.navCtrl.push(PatientdetailsPage, {
      Patient
    });
  }
}
