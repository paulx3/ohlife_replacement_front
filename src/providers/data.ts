import {Injectable} from '@angular/core';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';

@Injectable()
export class Data {

  constructor(public storage: Storage) {
  }
  save(data){
    let dbItems = [];
    this.storage.get('todos').then((todos) => {
      if (todos){
        dbItems = JSON.parse(todos);
      }
      dbItems.push(data);
      let newData = JSON.stringify(dbItems);
      console.log(newData);
      this.storage.set('todos', newData);
    });
  }
  getData(){
    return this.storage.get('todos');
  }

}
