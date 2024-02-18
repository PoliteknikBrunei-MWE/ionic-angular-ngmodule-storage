import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  memberName!: string;

  constructor(private storage: Storage) {
  }

  saveUserName(uname: string) {
    this.storage.set('username', uname);
  }

  getUserName() {
    this.storage.get('username').then((data) => {
      if(data){
        this.memberName = data;
      } else {
        this.memberName = "Guest";
      }
    });
  }

}
