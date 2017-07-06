import {Component} from "@angular/core";
import {AlertController, LoadingController, ModalController, NavController} from "ionic-angular";
import {ItemDetailPage} from "../item-detail-page/item-detail-page";
import {Auth} from "../../providers/auth";
import {Entries} from "../../providers/entries";
import {LoginPage} from "../login-page/login-page";
import {AddItemPage} from "../add-item-page/add-item-page";
import {Storage} from "@ionic/storage";
import * as Raven from "raven-js";

@Component({
  selector: "page-home",
  templateUrl: "home.html",
})
export class HomePage {
  public items;
  public loading;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public authService: Auth,
              public alertCtrl: AlertController, public loadingService: LoadingController,
              public entryService: Entries, public storage: Storage) {
  }

  ionViewDidLoad() {
    this.entryService.getEntry().then(
      (res) => {
        this.items = res;
      },
      (err) => {
        console.log("Get entries failed");
      });
  }

  addItem() {
    console.log(this.items);
    let addModal = this.modalCtrl.create(AddItemPage);
    addModal.onDidDismiss(
      (item) => {
        if (item) {
          this.entryService.createEntry(item).then(
            (res) => {
              // if (item.time == res["time"])
              // {
              //   let index: number = this.items.indexOf(item);
              //   if (index !== -1)
              //   {
              //     this.items.splice(index, 1);
              //   }
              // }
              this.items = this.items.filter((obj) => {
                return obj.time !== item.time;
              });
              this.items.push(res);
            },
            (err) => {
              this.showAlert("Add Failed", "An error occured when adding diary,please try again", ["OK"]);
              console.log(err + " add error");
            });
        }
      },
    );
    addModal.present();
    // let alert = this.alertCtrl.create({
    //   title: "Add Diary",
    //   message: "Add today's diary",
    //   inputs: [{name: "title"}],
    //   buttons: [{text: "Cancel"}, {
    //     text: "Save", handler: item =>
    //     {
    //       if (item)
    //       {
    //         this.showLoader();
    //         this.entryService.createEntry(item).then((res) =>
    //         {
    //           this.loading.dismiss();
    //           this.items = res;
    //           console.log("item added")
    //         }, (err) =>
    //         {
    //           console.log("error creating")
    //         });
    //       }
    //     }
    //   }]
    // });
    // alert.present();
  }

  // private saveItem(item)
  // {
  //   this.items.push(item);
  //   this.dataService.save(item);
  // }

  showLoader() {
    this.loading = this.loadingService.create("Authenticating");
    this.loading.present();
  }

  viewItem(item) {
    this.navCtrl.push(ItemDetailPage, {item: item});
  }

  logout() {
    this.authService.logout();
    this.navCtrl.setRoot(LoginPage);
  }

  deleteItem(item) {
    this.entryService.deleteEntry(item).then(
      (res) => {
        console.log(res);
        let index: number = this.items.indexOf(item);
        if (index !== -1) {
          this.items.splice(index, 1);
        }
      },
      (err) => {
        this.showAlert("Delete Failed", "An error occured when deleting diary, please try again", ["OK"]);
        console.log("delete failed");
      });
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
