import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-simulator',
  templateUrl: 'simulator.html',
})
export class SimulatorPage {

  tax: number = 0;
  money: number = 0;
  haveResult: boolean = false;
  result = {
    totalInt : 0,
    text : "",
    total : "",
    color : "",
    isDanger : false
  };
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SimulatorPage');
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
    if(this.tax >= 0 && this.tax <= 5)
    {
      this.result.text = "Recomendamos que você aumente para não ficar no prejuízo";
      this.result.color = "warning";
    }
    else if(this.tax >= 20)
    {
      this.result.text = "Não exagere na taxa";
      this.result.color = "danger";
    }
    else
    {
      this.result.text = "Ótima proposta!";
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
