import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ViewController
} from "ionic-angular";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { Comment } from "../../shared/comment";

/**
 * Generated class for the CommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-comment",
  templateUrl: "comment.html"
})
export class CommentPage {
  comment: FormGroup;
  commentData: Comment;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private viewCtrl: ViewController
  ) {
    this.commentData = { comment: "", date: "", rating: 1, author: "" };
    this.comment = this.formBuilder.group({
      rating: 5,
      author: ["", Validators.required],
      comment: ""
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad CommentPage");
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  onSubmit() {
    var date1 = new Date();
    var date2 = date1.toISOString();
    this.commentData.author = this.comment.value.author;
    this.commentData.comment = this.comment.value.comment;
    this.commentData.rating = this.comment.value.rating;
    this.commentData.date = date2;
    this.viewCtrl.dismiss(this.commentData);
  }
}
