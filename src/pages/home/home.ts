import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ItemDetailsPage } from '../item-details/item-details';

@Component({
  selector: 'home-page',
  templateUrl: 'home.html'
})
export class HomePage {
  items: any;

  constructor(public navCtrl: NavController) {

    this.items = [];
    for(let i = 1; i < 3; i++) {
      this.items.push({
        title: 'Item ' + i,
        description: 'This is item #' + i
      });
    }
    
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }

}
