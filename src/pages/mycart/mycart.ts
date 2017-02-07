import { Component } from '@angular/core';
import { ViewController, NavParams, ActionSheetController } from 'ionic-angular';
import { TacoService } from '../../services/cart.service';

@Component({
  selector: 'mycart',
  templateUrl: 'mycart.html'
})
export class MyCart {
    cart;

    dismiss() {
        this.viewCtrl.dismiss();
    }
    
    showTacoOptions(index: number) {
        let actionSheet = this.actionSheetCtrl.create({
        title: 'Taco Options',
        buttons: [
            {
            text: 'Remove from cart',
            role: 'destructive',
            handler: () => {
                console.log('Destructive clicked');
                this.tacoService.removeTaco(index);
                this.refreshCart();
            }
            },{
            text: 'Duplicate',
            handler: () => {
                console.log('Archive clicked');
                this.tacoService.addTaco(this.cart[index]);
                this.refreshCart();
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
    constructor(params: NavParams, public viewCtrl: ViewController, private tacoService: TacoService,
                public actionSheetCtrl: ActionSheetController) {
        this.cart = params.data;
    }
}