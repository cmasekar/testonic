import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { QuesoLanding } from '../pages/quesolanding/quesolanding';
import { TacoLanding } from '../pages/tacolanding/tacolanding';
import { ExtrasLanding } from '../pages/extraslanding/extraslanding';
import { CheckoutSummary } from '../pages/checkoutsummary/checkoutsummary';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage = HomePage;
  pages: Array<{title: string, component: any}>;
  
    isIOS() {
      return this.platform.is("ios");
  }

  constructor(public platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleLightContent();
      Splashscreen.hide();
    });

    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Queso', component: QuesoLanding },
      { title: 'Tacos', component: TacoLanding },
      { title: 'Extras', component: ExtrasLanding },
      { title: 'Checkout', component: CheckoutSummary }
    ];
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
