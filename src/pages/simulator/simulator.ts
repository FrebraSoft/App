import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-simulator',
  templateUrl: 'simulator.html',
})
export class SimulatorPage {

  tax: number = 0;
  money: number = 0;
  icms: number = 18;
  real : number = 0;
  haveResult: boolean = false;
  result = {
    totalInt : 0,
    text : "",
    icon : "",
    total : "",
    color : "",
    isDanger : false
  };
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  form()
  {
    if(!this.money || !this.tax)
      return false;
    
    var money = this.money;
    var totalValue = ((this.money*this.tax) / 100 );
    totalValue = (parseFloat(totalValue.toString())+parseFloat(money.toString()));
    this.haveResult = true;
    this.result.totalInt = parseFloat( this.formatReal(totalValue).replace(/[\D]+/g,'') );
    this.result.total = this.formatMoney(this.result.totalInt);
    if(this.tax >= 0 && this.tax <= 20)
    {
      this.result.text = "Não recomendamos assumir o prejuízo";
      this.result.icon = "ios-sad";
      this.result.color = "danger";
    }
    else if(this.tax >= 21 && this.tax <= 49)
    {
      this.result.text = "Hmmm você pode melhorar";
      this.result.icon = "ios-sad";
      this.result.color = "warning";
    }
    else
    {
      this.result.text = "Ótima proposta!";
      this.result.icon = "ios-happy";
      this.result.color = "primary";    
    }
  }

  formatReal(int)
  {
    var tmp = int+'';
    tmp = tmp.replace(/([0-9]{2})$/g, ",$1");
    if( tmp.length > 6 )
            tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
    return tmp;
  }

  formatMoney(mixed) {
    var int = parseInt(mixed.toFixed(2).toString().replace(/[^\d]+/g, ''));
    var tmp = int + '';
    tmp = tmp.replace(/([0-9]{2})$/g, ",$1");
    if (tmp.length > 6)
    tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
    
    return tmp;
  }
    
}
