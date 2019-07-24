import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

import { TabsPage } from '../pages/tabs/tabs';

import { ContactPage } from '../pages/contact/contact';
import { AboutPage } from '../pages/about/about';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = AboutPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

    });
  }
}
