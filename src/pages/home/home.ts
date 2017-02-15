import { Component, ViewChild } from '@angular/core';
import { QuesoLanding } from '../../pages/quesolanding/quesolanding';
import { NavController, MenuController, Platform, Slides, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;
  padding;
  
  goToTacoLanding() {
    this.navCtrl.setRoot(QuesoLanding)
  }

  openMenu() {
   this.menuCtrl.open();
  }

  closeMenu() {
    this.menuCtrl.close();
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

  setPadding() {
    if(this.plt.is("ios")) {
        this.padding = true;
      }
  }

  constructor(public navCtrl: NavController, public plt: Platform, public menuCtrl: MenuController, public params: NavParams) {
    this.padding = false;
    if(params.data.addPadding){
      this.setPadding();
    }
    menuCtrl.enable(true);
  }
}