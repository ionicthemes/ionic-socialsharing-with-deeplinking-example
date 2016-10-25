import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ItemDetailsPage } from '../item-details/item-details';
import { SocialSharing } from 'ionic-native';
export var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.items = [];
        for (var i = 1; i < 4; i++) {
            this.items.push({
                id: i,
                title: 'Item ' + i,
                description: 'This is item #' + i,
                img: './assets/imgs/img' + i + '.jpeg'
            });
        }
    }
    HomePage.prototype.itemTapped = function (item) {
        this.navCtrl.push(ItemDetailsPage, {
            'itemId': item.id
        });
    };
    HomePage.prototype.shareItem = function (item) {
        // message, subject, file, url
        SocialSharing.share("Check this item!", item.title, item.img, 'demoapp://home/items/' + item.id).then(function () {
            // Success!
            debugger;
        }).catch(function () {
            // Error!
            debugger;
        });
    };
    HomePage.decorators = [
        { type: Component, args: [{
                    selector: 'home-page',
                    templateUrl: 'home.html'
                },] },
    ];
    /** @nocollapse */
    HomePage.ctorParameters = [
        { type: NavController, },
    ];
    return HomePage;
}());
