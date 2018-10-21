import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ViewController,
  normalizeURL,
  Platform
} from "ionic-angular";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { Camera, CameraOptions } from "@ionic-native/camera";

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-register",
  templateUrl: "register.html"
})
export class RegisterPage {
  registerForm: FormGroup;
  //image: string = "assets/imgs/logo.png";
  image: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private camera: Camera,
    private formBuilder: FormBuilder,
    private platform: Platform
  ) {
    this.registerForm = this.formBuilder.group({
      firstname: [
        "",
        [Validators.required, Validators.minLength(2), Validators.maxLength(25)]
      ],
      lastname: [
        "",
        [Validators.required, Validators.minLength(2), Validators.maxLength(25)]
      ],
      username: [
        "",
        [Validators.required, Validators.minLength(5), Validators.maxLength(25)]
      ],
      password: [
        "",
        [Validators.required, Validators.minLength(8), Validators.maxLength(25)]
      ],
      telnum: ["", [Validators.required, Validators.pattern]],
      email: ["", [Validators.required, Validators.email]]
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad RegisterPage");
  }
  dismiss() {
    this.viewCtrl.dismiss(true);
  }

  getPicture() {
    const options: CameraOptions = {
      quality: 100,
      targetHeight: 100,
      targetWidth: 100,
      correctOrientation: true,
      allowEdit: true,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.PNG,
      mediaType: this.camera.MediaType.PICTURE,
      cameraDirection: this.camera.Direction.FRONT
    };

    this.camera.getPicture(options).then(
      imageData => {
        // this.image = imageData;
        //  console.log(imageData);
        if (this.platform.is("ios")) this.image = normalizeURL(imageData);
        // IF problem only occur in ios and normalizeURL
        //not work for you then you can also use
        //this.base64Image= imageData.replace(/^file:\/\//, '');
        else this.image = "data:image/png;base64," + imageData;
      },
      err => {
        console.log("Error obtaining picture");
      }
    );
  }

  onSubmit() {
    console.log(this.registerForm.value);
    this.dismiss();
  }
}
