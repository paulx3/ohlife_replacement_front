import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {ItemDetailPage} from "./item-detail-page";

@NgModule({
  declarations: [
    ItemDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ItemDetailPage),
  ],
  exports: [
    ItemDetailPage
  ]
})
export class ItemDetailPageModule {}
