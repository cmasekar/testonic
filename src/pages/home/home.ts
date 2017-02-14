import { Component, ViewChild } from '@angular/core';
import { QuesoLanding } from '../../pages/quesolanding/quesolanding';
import { NavController, MenuController, Platform, Slides } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;
  isIOS() {
    return this.plt.is("ios");
  }
  
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

  constructor(public navCtrl: NavController, public plt: Platform, public menuCtrl: MenuController) {
    menuCtrl.enable(true);
  }
}