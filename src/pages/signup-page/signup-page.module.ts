import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {SignupPage} from "./signup-page";

@NgModule({
  declarations: [
    SignupPage,
  ],
  imports: [
    IonicPageModule.forChild(SignupPage),
  ],
  exports: [
    SignupPage
  ]
})
export class SignupPageModule {
  email;
}
