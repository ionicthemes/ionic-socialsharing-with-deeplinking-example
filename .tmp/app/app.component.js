import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar, Deeplinks } from 'ionic-native';
import { TabsPage } from '../pages/tabs/tabs';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
export var MyApp = (function () {
    function MyApp(platform) {
        var _this = this;
        this.rootPage = TabsPage;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
            Deeplinks.routeWithNavController(_this.navChild, {
                '/about': AboutPage,
                '/contact': ContactPage,
                '/items/:itemId': ItemDetailsPage
            }).subscribe(function (match) {
                console.log('Successfully routed', match);
            }, function (nomatch) {
                console.log('Unmatched Route', nomatch);
            });
        });
    }
    MyApp.decorators = [
        { type: Component, args: [{
                    template: "<ion-nav [root]=\"rootPage\"></ion-nav>"
                },] },
    ];
    /** @nocollapse */
    MyApp.ctorParameters = [
        { type: Platform, },
    ];
    MyApp.propDecorators = {
        'navChild': [{ type: ViewChild, args: [Nav,] },],
    };
    return MyApp;
}());
