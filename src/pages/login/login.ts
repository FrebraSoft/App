import { Component,ViewChild } from '@angular/core';
import { App,Platform, Alert, NavController, Slides, LoadingController, ToastController,ViewController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { TabsPage } from '../tabs/tabs';
import { AuthProvider } from '../../providers/auth/auth';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  @ViewChild('slider') slider: Slides;
  @ViewChild('form') form: NgForm;
  credentialsForm: FormGroup;
  slideDocumentForm: FormGroup;
  slidePasswordForm: FormGroup;
  Form: object;
  Labels: object;

  constructor(
    public navCtrl: NavController, 
    public formBuilder: FormBuilder, 
    public loading: LoadingController, 
    private toastCtrl: ToastController,
    public viewCtrl: ViewController,
    private app: App,
    private auth:AuthProvider,
  ) {
      this.Form = {
        email : "", 
        password : "", 
      };
      this.Labels = {
        next : "Prosseguir", 
        back : "Voltar", 
      };
      this.slideDocumentForm = formBuilder.group({
        document: ['222.343.162-35', [Validators.required]],
       });
       this.slidePasswordForm = formBuilder.group({
          password: ['123456', [Validators.required,Validators.minLength(4),Validators.maxLength(30)]],
    });
   }
  
  backButtonAction(){
    this.modalhide();
  }
  
  ngAfterViewInit() {
    // child is set
    this.slider.lockSwipes(true);
  }

  goToSlide(number) {
    this.slider.lockSwipes(false);
    this.slider.slideTo(number,700);
    this.slider.lockSwipes(true);
  }

  nextSlide(type='next') {
    this.slider.lockSwipes(false);
    var number = ( type == 'next') ? (this.slider.getActiveIndex()+1) : (this.slider.getActiveIndex()-1) ;
    this.slider.slideTo( number,700);
    this.slider.lockSwipes(true);
  }

  backSlide() {
    this.slider.lockSwipes(false);
    this.slider.slideTo( (this.slider.getActiveIndex()-1),700);
    this.slider.lockSwipes(true);
  }
  
  modalhide() {
    this.viewCtrl.dismiss();
  }
  
  submit(form : FormGroup,last=false) {
    if (!form.valid) 
      return false;

    if(last==true)
      return this.finally();

    return this.nextSlide();
  }

  finally() {
    let self = this;
    this.auth.store({'lorem':"ipsum"});
    this.toastCtrl.create({ duration: 3000, position: 'bottom', showCloseButton : true, closeButtonText: "OK", cssClass: "-toast-success" })
      .setMessage('Bem-vinda, Tatiana')
      .present();    
    this.app.getRootNav().setRoot(TabsPage);
    this.modalhide();
      
  }
}