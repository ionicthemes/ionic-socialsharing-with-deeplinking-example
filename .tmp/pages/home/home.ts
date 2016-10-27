import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ItemDetailsPage } from '../item-details/item-details';
import { SocialSharing } from 'ionic-native';

@Component({
  selector: 'home-page',
  templateUrl: 'home.html'
})
export class HomePage {
  items = [];

  constructor(private navCtrl: NavController) {

    for(let i = 1; i < 4; i++) {
      this.items.push({
        id: i,
        title: 'Item ' + i,
        description: 'This is item #' + i,
        img: './assets/imgs/img' + i + '.jpeg'
      });
    }
  }

  itemTapped(item) {
    this.navCtrl.push(ItemDetailsPage, {
      'itemId': item.id
    });
  }

  shareItem(item) {
    // message, subject, file, url
    SocialSharing.share("Check this item:  demoapp://home/items/" + item.id, item.title, item.img)
    .then(() => {

    })
    .catch(() => {

    });
  }

}
