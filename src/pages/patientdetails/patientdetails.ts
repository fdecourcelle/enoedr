import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController
} from "ionic-angular";
import { TimelinePage } from "../timeline/timeline";
/**
 * Generated class for the PatientdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-patientdetails",
  templateUrl: "patientdetails.html"
})
export class PatientdetailsPage {
  public patient: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController
  ) {}

  ionViewDidLoad() {
    this.patient = this.navParams.get("Patient");
    console.log("passa patientdetail " + JSON.stringify(this.patient));
  }
  openTimeline() {
    console.log("PASSA OPEN TIMELINE");
    let modal = this.modalCtrl.create(TimelinePage);
    modal.present();
  }
  openTimelinePage() {
    this.navCtrl.push(TimelinePage, {});
  }
}
