import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ItemDetailsPage } from '../item-details/item-details';
import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'home-page',
  templateUrl: 'home.html'
})
export class HomePage {
  items = [];

  constructor(
    private navCtrl: NavController,
    public socialSharing: SocialSharing) {

    //this code is to build the dummy data of this example
    for(let i = 1; i < 4; i++) {
      this.items.push({
        id: i,
        title: 'Item ' + i,
        description: 'This is item #' + i,
        img: './assets/imgs/img' + i + '.jpeg'
      });
    }
  }

  //this method gets called when the user taps on a specific item
  itemTapped(item) {
    this.navCtrl.push(ItemDetailsPage, {
      'itemId': item.id
    });
  }

  shareItem(item) {
    //this code is to use the social sharing plugin
    // message, subject, file, url
    this.socialSharing.share("Check this item:  demoapp://home/items/" + item.id, item.title, item.img)
    .then(() => {

    })
    .catch(() => {

    });
  }

}
