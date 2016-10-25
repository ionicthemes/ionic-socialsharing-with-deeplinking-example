import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ItemDetailsPage } from '../pages/item-details/item-details';
// export const deepLinkConfig: DeepLinkConfig = {
// links: [
//   { component: AboutPage, name: 'About', segment: 'about' },
//   { component: ContactPage, name: 'Contact', segment: 'contact' },
//   { component: ItemDetailsPage, name: 'Details', segment: 'items/:itemId', defaultHistory: [ HomePage ] }
// ]
// };
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        MyApp,
                        AboutPage,
                        ContactPage,
                        HomePage,
                        TabsPage,
                        ItemDetailsPage
                    ],
                    imports: [
                        IonicModule.forRoot(MyApp)
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
                },] },
    ];
    /** @nocollapse */
    AppModule.ctorParameters = [];
    return AppModule;
}());
