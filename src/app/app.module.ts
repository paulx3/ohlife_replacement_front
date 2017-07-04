import {BrowserModule} from "@angular/platform-browser";
import {ErrorHandler, NgModule} from "@angular/core";
import {IonicApp, IonicErrorHandler, IonicModule} from "ionic-angular";
import {SplashScreen} from "@ionic-native/splash-screen";
import {StatusBar} from "@ionic-native/status-bar";
import {ElasticModule} from "angular2-elastic";

import {MyApp} from "./app.component";
import {HomePage} from "../pages/home/home";
import {AddItemPage} from "../pages/add-item-page/add-item-page";
import {ItemDetailPage} from "../pages/item-detail-page/item-detail-page";
import {Data} from "../providers/data";
import {IonicStorageModule} from "@ionic/storage";
import {Auth} from "../providers/auth";
import {LoginPage} from "../pages/login-page/login-page";
import {SignupPage} from "../pages/signup-page/signup-page";
import {HttpModule} from "@angular/http";
import {Entries} from "../providers/entries";
import {ConfirmationPage} from "../pages/confirmation-page/confirmation-page";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddItemPage,
    ItemDetailPage,
    LoginPage,
    SignupPage,
    ConfirmationPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule,
    ElasticModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddItemPage,
    ItemDetailPage,
    LoginPage,
    SignupPage,
    ConfirmationPage,
  ],
  providers: [
    Data,
    Auth,
    Entries,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ],
})
export class AppModule {}
