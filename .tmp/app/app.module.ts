import { NgModule } from '@angular/core';
import { IonicApp, IonicModule, DeepLinkConfig } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ItemDetailsPage } from '../pages/item-details/item-details';


export const deepLinkConfig: DeepLinkConfig = {
  links: [
    { component: AboutPage, name: 'About', segment: 'about' },
    { component: ContactPage, name: 'Contact', segment: 'contact' },
    { component: ItemDetailsPage, name: 'Details', segment: 'items/:itemId', defaultHistory: [ HomePage ] }
  ]
};


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ItemDetailsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp, {}, deepLinkConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ItemDetailsPage
  ],
  providers: []
})
export class AppModule {}
