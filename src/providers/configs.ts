import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Configs {

  constructor(public http: Http) {
  }

  getConfigs() {
    return new Promise((resolve, reject) => {

    });
  }

}
