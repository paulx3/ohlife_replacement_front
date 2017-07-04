import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Auth} from './auth';
import {AppSettings} from '../AppSettings';

@Injectable()
export class Entries
{

  constructor(public http: Http, public authService: Auth)
  {
  }

  getEntry()
  {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Authorization', AppSettings.AUTH_HEADER + this.authService.token);
      this.http.get(AppSettings.API_ENDPOINT + '/get_all_entries', {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        },         (err) => {
          reject(err);
        });
    });
  }

  createEntry(entry)
  {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Authorization', AppSettings.AUTH_HEADER + this.authService.token);
      headers.append('Content-Type', 'application/json');
      this.http.post(AppSettings.API_ENDPOINT + '/entries_create', JSON.stringify(entry), {headers: headers})
        .map(res => res.json())
        .subscribe((res) => {
          resolve(res);
        },         (err) => {
          reject(err);
        });
    });
  }

  deleteEntry(deleteRequest)
  {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Authorization', AppSettings.AUTH_HEADER + this.authService.token);
      headers.append('Content-Type', 'application/json');
      this.http.post(AppSettings.API_ENDPOINT + '/entries_delete', JSON.stringify(deleteRequest), {headers: headers}).subscribe((res) => {
          resolve(res);
        },
                                                                                                                                (err) => {
          reject(err);
        });
    });
  }
}
