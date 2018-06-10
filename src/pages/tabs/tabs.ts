
import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { Platform } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { SimulatorPage } from '../simulator/simulator';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SimulatorPage;
  tab3Root = ProfilePage;

  constructor(public platform : Platform) {}

  backButtonAction(){
    this.platform.exitApp();
  }
}