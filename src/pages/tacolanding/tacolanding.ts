import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { TacoService } from '../../services/taco.service';
import { MyCart } from '../../pages/mycart/mycart';
import { TacoPage } from '../../pages/taco/taco';
import { ExtrasLanding } from '../../pages/extraslanding/extraslanding';


@Component({
  selector: 'tacolanding',
  templateUrl: 'tacolanding.html'
})
export class TacoLanding {
    currentTacos;
    
    previewCart() {
        let modal = this.modalCtrl.create(MyCart);
        modal.present();
    }

    goToTaco() {
        this.navCtrl.setRoot(TacoPage);
    }

    goToExtrasLanding() {
        this.navCtrl.setRoot(ExtrasLanding);
    }

    constructor(private tacoService: TacoService, public navCtrl: NavController, public modalCtrl: ModalController) {
        this.currentTacos = tacoService.getTacos();
    }
}