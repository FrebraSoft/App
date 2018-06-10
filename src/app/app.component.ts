import { Component } from '@angular/core';
import { Platform, App, ViewController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WelcomePage } from '../pages/welcome/welcome';
import { TabsPage } from '../pages/tabs/tabs';
import { AuthProvider } from '../providers/auth/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;
  lastBack : any;
  constructor(
    platform: Platform, 
    app : App, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen, 
    auth: AuthProvider,
  ) {
    this.rootPage = ( auth.checkAuth() ) ? TabsPage : WelcomePage ;

    platform.ready().then(() => {   
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.backgroundColorByHexString('#7EC0EE');
      splashScreen.hide();     
      platform.registerBackButtonAction(() => {
        let nav = app.getActiveNav();
        let activeView: ViewController = nav.getActive();
        if(activeView != null){
          activeView.instance.backButtonAction();
        }
      });
    });
  }
}