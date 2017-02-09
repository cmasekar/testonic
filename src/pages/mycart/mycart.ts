import { Component } from '@angular/core';
import { ViewController, NavParams, ActionSheetController, NavController } from 'ionic-angular';
import { EditTaco } from '../../pages/edittaco/edittaco';

import { TacoService } from '../../services/cart.service';


@Component({
  selector: 'mycart',
  templateUrl: 'mycart.html'
})
export class MyCart {
    cart;

    dismiss() {
        this.viewCtrl.dismiss(false);
    }

    goToExtras() {
        this.viewCtrl.dismiss(true);
    }
    
    showTacoOptions(index: number) {
        let actionSheet = this.actionSheetCtrl.create({
        title: 'Taco Options',
        buttons: [
            {
            text: 'Remove from cart',
            role: 'destructive',
            handler: () => {
                this.tacoService.removeTaco(index);
                this.refreshCart();
            }
            },{
            text: 'Duplicate',
            handler: () => {
                this.tacoService.addTaco(this.cart[index]);
                this.refreshCart();
            }
            },{
            text: 'Edit',
            handler: () => {
                this.navCtrl.push(EditTaco, {index: index});
            }
            },{
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
                console.log('Cancel clicked');
            }
            }
        ]
        });
        actionSheet.present();
    }

    refreshCart() {
        this.cart = this.tacoService.getTacos();
    }

    editTaco(index: number) {
        this.navCtrl.setRoot(EditTaco, {index: index});
    }

    constructor(params: NavParams, public viewCtrl: ViewController, private tacoService: TacoService,
                public actionSheetCtrl: ActionSheetController, public navCtrl: NavController) {
        this.cart = params.data;
    }
}