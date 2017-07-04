import {Component} from '@angular/core';
import {NavController, ViewController} from 'ionic-angular';

/**
 * Generated class for the AddItemPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-add-item-page',
  templateUrl: 'add-item-page.html',
})
export class AddItemPage
{

  time: String = new Date().toISOString().slice(0, 10);
  text;

  constructor(public navCtrl: NavController, public view: ViewController)
  {

  }

  saveItem()
  {
    let newItem = {
      time: this.time,
      text: this.text,
    };

    this.view.dismiss(newItem);

  }

  close()
  {
    this.view.dismiss();
  }

}
