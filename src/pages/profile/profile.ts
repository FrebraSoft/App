import { Component } from '@angular/core';
import { App,AlertController,ModalController,ToastController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { WelcomePage } from '../welcome/welcome';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(
    private app : App ,
    private toastCtrl: ToastController,
    private auth: AuthProvider,
    public modalCtrl: ModalController,
    private alertCtrl: AlertController
  ) {
  }

  goToPage(Page) {
    let myModal = this.modalCtrl.create(Page);
    myModal.present();
  }

  referencialCode() {
    var number = Math.floor(Math.random()*90000) + 10000;
    var message = "Seu código referencial é: <br> <h1>"+number+"</h1>";
    this.alertCtrl.create({
      subTitle: message,
      cssClass: 'centeralizad',
      buttons: ['Ok']
    }).present();
  }

  promocionalCode() {
    let self = this;
    this.alertCtrl.create({
      title: 'Informe seu código promocional',
      inputs: [
        {
          name: 'code',
          placeholder: 'Código',
          type: 'text'
        },

      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Ativar',
          handler: data => {
            if(!data.code)
              return false;
            if(data.code)
            {
              this.toastCtrl.create({ duration: 3000, position: 'bottom', showCloseButton : true, closeButtonText: "OK", cssClass: "-toast-success" })
              .setMessage('Código referêncial aceito')
              .present();    
            }
          }
        }
      ]
    }).present();
  }

  cancelarAssinatura() {
    let self = this;
    this.alertCtrl.create({
      title: 'Você quer realmente cancelar sua assinatura ?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Sim',
        }
      ]
    }).present();
  }

  public signOut() {
    this.auth.signOut();
    this.app.getRootNav().setRoot(WelcomePage);
  }
}
