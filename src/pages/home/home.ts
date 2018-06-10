import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chart } from 'chart.js';
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    
    Data = [
      {
        'color' : 'primary',
        'label' : 'NFE 99',
        'value' : 'R$ 98,90',
        'date'  : '07/06/2018',
        'icon'  : 'ios-cash-outline',
      },
      {
        'color' : 'danger',
        'label' : 'NFE 98',
        'value' : 'R$ 38,40',
        'date'  : '07/06/2018',
        'icon'  : 'ios-cash-outline',
      },
      {
        'color' : 'primary',
        'label' : 'NFE 97',
        'value' : 'R$ 38,90',
        'date'  : '06/06/2018',
        'icon'  : 'ios-cash-outline',
      },
      {
        'color' : 'primary',
        'label' : 'NFE 96',
        'value' : 'R$ 198,78',
        'date'  : '06/06/2018',
        'icon'  : 'ios-cash-outline',
      },
      {
        'color' : 'primary',
        'label' : 'NFE 95',
        'value' : 'R$ 203,43',
        'date'  : '05/06/2018',
        'icon'  : 'ios-cash-outline',
      },
      {
        'color' : 'danger',
        'label' : 'NFE 94',
        'value' : 'R$ 128,40',
        'date' : '04/06/2018',
        'icon' : 'ios-cash-outline',
      },
      {
        'color' : 'danger',
        'label' : 'NFE 93',
        'value' : 'R$ 50,25',
        'date' : '03/06/2018',
        'icon' : 'ios-cash-outline',
      },
      {
        'color' : 'primary',
        'label' : 'NFE 92',
        'value' : 'R$ 98,90',
        'date' : '02/06/2018',
        'icon' : 'ios-cash-outline',
      },
      {
        'color' : 'primary',
        'label' : 'NFE 93',
        'value' : 'R$ 98,90',
        'date' : '01/06/2018',
        'icon' : 'ios-cash-outline',
      },
      {
        'color' : 'primary',
        'label' : 'NFE 91',
        'value' : 'R$ 56,39',
        'date' : '25/05/2018',
        'icon' : 'ios-cash-outline',
      },
      {
        'color' : 'primary',
        'label' : 'NFE 90',
        'value' : 'R$ 29,34',
        'date' : '24/05/2018',
        'icon' : 'ios-cash-outline',
      },
    ]
    constructor(public navCtrl: NavController) {
 
    }
}