import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, NavController} from 'ionic-angular';
import { StatusBar, Deeplinks } from 'ionic-native';
import { TabsPage } from '../pages/tabs/tabs';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';


@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = TabsPage;
  @ViewChild(Nav) navChild:Nav;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Deeplinks.routeWithNavController(this.navChild, {
        '/about': AboutPage,
        '/contact': ContactPage,
        '/items/:itemId': ItemDetailsPage
      }).subscribe((match) => {
        console.log('Successfully routed', match);
      }, (nomatch) => {
        console.log('Unmatched Route', nomatch);
      });
    });
  }
}
