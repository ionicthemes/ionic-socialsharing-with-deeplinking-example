import { NavController } from 'ionic-angular';
export declare class HomePage {
    private navCtrl;
    items: any[];
    constructor(navCtrl: NavController);
    itemTapped(item: any): void;
    shareItem(item: any): void;
}
