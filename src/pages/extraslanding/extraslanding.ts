import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ExtrasService } from '../../services/extras.service';
import { MyCart } from '../../pages/mycart/mycart';
import { ExtrasPage } from '../../pages/extras/extras';
import { CheckoutSummary } from '../../pages/checkoutsummary/checkoutsummary';

@Component({
  selector: 'extrasLanding',
  templateUrl: 'extrasLanding.html'
})
export class ExtrasLanding {
    currentExtras;
    
    previewCart() {
        let modal = this.modalCtrl.create(MyCart);
        modal.present();
    }

    goToExtras() {
        this.navCtrl.setRoot(ExtrasPage);
    }

    goToCheckoutSummary() {
        this.navCtrl.setRoot(CheckoutSummary);
    }

    constructor(private extrasService: ExtrasService, public navCtrl: NavController, public modalCtrl: ModalController) {
        this.currentExtras = extrasService.getExtras();
    }
}