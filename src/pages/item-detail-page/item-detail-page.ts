import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ItemDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-item-detail-page',
  templateUrl: 'item-detail-page.html',
})
export class ItemDetailPage {

  description;
  title;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.title=this.navParams.get("item").time;
    this.description=this.navParams.get("item").text;
  }

}
