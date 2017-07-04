import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {Auth} from '../../providers/auth';
import {LoginPage} from '../login-page/login-page';

@IonicPage()
@Component({
  selector: 'page-confirmation-page',
  templateUrl: 'confirmation-page.html',
})
export class ConfirmationPage
{
  public disabled = false;
  public confirmText = 'Resent';

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: Auth,
              public alertCtrl: AlertController)
  {
  }

  ionViewDidLoad()
  {
    console.log('ionViewDidLoad ConfirmationPage');
  }

  logout()
  {
    this.authService.logout();
    this.navCtrl.setRoot(LoginPage);
  }

  resendEmail()
  {

    this.authService.resentActiveEmail().then(
      (res) => {
        this.disabled = true;
        this.showAlert('Email Resent', 'Email has been resent', ['OK']);
        for (let i = 0; i < 60; i++)
        {
          setTimeout(() => {
            this.confirmText = 'Wait ' + (60 - i) + ' seconds';
          },         1000 * i);
        }
        setTimeout(() => {
          this.confirmText = 'Resent';
          this.disabled = false;
        },         60 * 1000);
      }, (err) => {
        this.showAlert('Error', 'Check if you have already activated your account.', ['Close']);
      },
    );

  }

  showAlert(alertTitle, alertSubTitle, alertButtons)
  {
    let alert = this.alertCtrl.create({
      title: alertTitle,
      subTitle: alertSubTitle,
      buttons: alertButtons,
    });
    alert.present();
  }
}
