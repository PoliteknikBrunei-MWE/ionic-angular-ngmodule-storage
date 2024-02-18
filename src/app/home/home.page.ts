import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  memberName!: {fname: string, lname: string};
  firstName!: string;

  constructor(private storage: Storage) {
  }

  saveUserName(uname: {fname: string, lname: string}) {
    this.storage.set('username', JSON.stringify(uname));
  }

  getUserName() {
    this.storage.get('username').then((data) => {
      if(data){
        this.memberName = JSON.parse(data);
        this.firstName = this.memberName.fname;
      }
    });
  }

}
