import {Component} from "@angular/core";
import {AlertController, IonicPage, LoadingController, NavController} from "ionic-angular";
import {Auth} from "../../providers/auth";
import {LoginPage} from "../login-page/login-page";

@IonicPage()
@Component({
  selector: "page-signup-page",
  templateUrl: "signup-page.html",
})
export class SignupPage {

  email;
  password;
  loading;

  constructor(public navCtrl: NavController, public authService: Auth,
              public loadingCtrl: LoadingController, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad SignupPage");
  }

  register() {
    this.showLoader();
    let details = {
      email: this.email,
      password: this.password,
    };
    this.authService.createAccount(details).then(
      (result) => {
        this.loading.dismiss();
        this.showAlert("Register Success", "Please Login in", ["OK"]);
        this.navCtrl.setRoot(LoginPage);
      },
      (err) => {
        this.loading.dismiss();
      },
    );
  }

  showLoader() {
    this.loading = this.loadingCtrl.create({content: "Authenticating"});
    this.loading.present();
  }

  showAlert(alertTitle, alertSubTitle, alertButtons) {
    let alert = this.alertCtrl.create({
      title: alertTitle,
      subTitle: alertSubTitle,
      buttons: alertButtons,
    });
    alert.present();
  }

}
