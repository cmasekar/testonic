import { Component } from '@angular/core';
import { ViewController, NavParams, ActionSheetController, NavController } from 'ionic-angular';
import { EditTaco } from '../../pages/edittaco/edittaco';
import { EditQueso } from '../../pages/editqueso/editqueso';

import { QuesoService } from '../../services/queso.service';
import { TacoService } from '../../services/taco.service';
import { ExtrasService } from '../../services/extras.service';


@Component({
  selector: 'mycart',
  templateUrl: 'mycart.html'
})
export class MyCart {
    quesos;
    tacos;
    extras;

    dismiss() {
        this.viewCtrl.dismiss(false);
    }
    
    showQuesoOptions(index: number) {
        let actionSheet = this.actionSheetCtrl.create({
        title: 'Queso Options',
        buttons: [
            {
            text: 'Remove from cart',
            role: 'destructive',
            handler: () => {
                this.quesoService.removeQueso(index);
                this.refreshCart();
            }
            },{
            text: 'Edit',
            handler: () => {
                this.navCtrl.push(EditQueso, {index: index});
            }
            },{
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
            }
            }
        ]
        });
        actionSheet.present();
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
                this.tacoService.addTaco(this.tacos[index]);
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
            }
            }
        ]
        });
        actionSheet.present();
    }

    showExtrasOptions(index: number) {
        let actionSheet = this.actionSheetCtrl.create({
        title: 'Extras Options',
        buttons: [
            {
            text: 'Remove from cart',
            role: 'destructive',
            handler: () => {
                this.extrasService.removeExtra(index);
                this.refreshCart();
            }
            },{
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
            }
            }
        ]
        });
        actionSheet.present();
    }

    refreshCart() {
        this.quesos = this.quesoService.getQuesos();
        this.tacos = this.tacoService.getTacos();
        this.extras = this.extrasService.getExtras();
    }

    constructor(params: NavParams, public viewCtrl: ViewController, private quesoService: QuesoService,
                private tacoService: TacoService, private extrasService: ExtrasService,
                public actionSheetCtrl: ActionSheetController, public navCtrl: NavController) {
        this.quesos = quesoService.getQuesos();
        this.tacos = tacoService.getTacos();
        this.extras = extrasService.getExtras();
    }
}