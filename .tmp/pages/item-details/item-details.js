import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
export var ItemDetailsPage = (function () {
    function ItemDetailsPage(nav, navParams) {
        this.nav = nav;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('itemId');
        this.image = './assets/imgs/img' + this.selectedItem + '.jpeg';
    }
    ItemDetailsPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'item-details.html'
                },] },
    ];
    /** @nocollapse */
    ItemDetailsPage.ctorParameters = [
        { type: NavController, },
        { type: NavParams, },
    ];
    return ItemDetailsPage;
}());
