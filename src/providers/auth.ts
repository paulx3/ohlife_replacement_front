import {Injectable} from "@angular/core";
import {Headers, Http} from "@angular/http";
import "rxjs/add/operator/map";
import {Storage} from "@ionic/storage";
import {AppSettings} from "../AppSettings";

/*
 Generated class for the Auth provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class Auth {

  public token;

  constructor(public http: Http, public storage: Storage) {

  }

  createAccount(details) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append("Content-Type", "application/json");
      this.http.post(AppSettings.API_ENDPOINT + "/register", JSON.stringify(details), {headers: headers}).subscribe(
        res => {
          // let data = res.json();
          // this.token = data.access_token;
          // this.storage.set("access_token", data.access_token);
          resolve(res);
        },
        (err) => {
          reject(err);
        },
      );
    });
  }

  checkAuth() {
    return new Promise((resolve, reject) => {
      this.storage.get("access_token").then(
        (value) => {
          this.token = value;
          let headers = new Headers();
          headers.append("Authorization", AppSettings.AUTH_HEADER + this.token);

          this.http.get(AppSettings.API_ENDPOINT + "/checkauth", {headers: headers}).subscribe(
            (res) => {
              let body = res.text();
              resolve(body);
            },
            (err) => {
              reject(err);
            },
          );
        },
      );
    });
  }

  logout() {
    this.storage.set("access_token", "");
  }

  login(credentials) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append("Content-Type", "application/json");
      this.http.post(AppSettings.API_ENDPOINT + "/auth", JSON.stringify(credentials), {headers: headers}).subscribe(
        (res) => {
          let data = res.json();
          this.token = data.access_token;
          this.storage.set("access_token", data.access_token);
          resolve(data);
        },
        (error => {
          reject(error);
        }),
      );
    });
  }

  resentActiveEmail() {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      // headers.append('Content-Type', 'application/json');
      headers.append("Authorization", AppSettings.AUTH_HEADER + this.token);
      this.http.get(AppSettings.API_ENDPOINT + "/resent_activation", {headers: headers}).subscribe(
        (res) => {
          resolve(res);
        },
        (err) => {
          reject(err);
        },
      );
    });
  }

}
