import {Component} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {Auth} from '../../providers/auth';
import {HomePage} from '../home/home';
import {SignupPage} from '../signup-page/signup-page';
import {ConfirmationPage} from '../confirmation-page/confirmation-page';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login-page',
  templateUrl: 'login-page.html',
})
export class LoginPage
{
  loading;
  email;
  password;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController
    ,         public authService: Auth)
  {
  }

  ionViewDidLoad()
  {
    this.showLoader();
    this.authService.checkAuth().then(
      (res) => {
        if (res == 'Not Active')
        {
          this.loading.dismiss();
          this.navCtrl.setRoot(ConfirmationPage);
        }
        else if (res == 'Authorization Passed')
        {
          this.loading.dismiss();
          this.navCtrl.setRoot(HomePage);
        }
      }, (err) => {
        this.loading.dismiss();
      },
    );
  }

  showLoader()
  {
    this.loading = this.loadingCtrl.create({content: 'Authenticating'});
    this.loading.present();
  }

  login()
  {
    this.showLoader();
    let credentials = {username: this.email, password: this.password};
    return this.authService.login(credentials).then((res) => {
      this.authService.checkAuth().then((res) => {
        this.loading.dismiss();
        if (res == 'Not Active')
        {
          this.navCtrl.setRoot(ConfirmationPage);
        }
        else if (res == 'Authorization Passed')
        {
          this.navCtrl.setRoot(HomePage);
        }
      });

    },                                              (err) => {
      this.loading.dismiss();
    });
  }

  cancel()
  {
    this.navCtrl.pop();
  }

  launchSignup()
  {
    this.navCtrl.push(SignupPage);
  }

}
