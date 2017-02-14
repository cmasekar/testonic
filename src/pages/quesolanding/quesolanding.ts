import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { QuesoService } from '../../services/queso.service';
import { MyCart } from '../../pages/mycart/mycart';
import { QuesoPage } from '../../pages/queso/queso';
import { TacoLanding } from '../../pages/tacolanding/tacolanding';

@Component({
  selector: 'quesolanding',
  templateUrl: 'quesolanding.html'
})
export class QuesoLanding {
    currentQuesos;
    
    previewCart() {
        let modal = this.modalCtrl.create(MyCart);
        modal.present();
    }

    goToQueso() {
        this.navCtrl.setRoot(QuesoPage);
    }

    goToTacoLanding() {
        this.navCtrl.setRoot(TacoLanding);
    }

    constructor(private quesoService: QuesoService, public navCtrl: NavController, public modalCtrl: ModalController) {
        this.currentQuesos = quesoService.getQuesos();
    }
}