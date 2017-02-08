import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { TacoService } from '../../services/cart.service';
import { MyCart } from '../../pages/mycart/mycart';
import { OrderPage } from '../../pages/order/order';
import { ExtrasPage } from '../../pages/extras/extras';

@Component({
  selector: 'tacomade',
  templateUrl: 'tacomade.html'
})
export class TacoMade {
    previewCart() {
        let modal = this.modalCtrl.create(MyCart, this.tacoService.getTacos());
        modal.present();
    }

    makeAnotherTaco() {
        this.navCtrl.setRoot(OrderPage);
    }

    goToExtras() {
        this.navCtrl.push(ExtrasPage);
    }

    constructor(private tacoService: TacoService, public navCtrl: NavController,
                public modalCtrl: ModalController) {
    }
}