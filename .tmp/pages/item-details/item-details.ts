import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'item-details.html'
})

export class ItemDetailsPage {
  selectedItem: any;
  image: string;

  constructor(private nav: NavController, navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('itemId');
    this.image = './assets/imgs/img' + this.selectedItem + '.jpeg';
  }
}
