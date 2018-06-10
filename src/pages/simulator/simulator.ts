import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-simulator',
  templateUrl: 'simulator.html',
})
export class SimulatorPage {

  tax: number = 10;
  money: number = 50;
  icms: number = 18;
  real : number = 0;
  haveResult: boolean = false;
  result = {
    totalInt : 0,
    text : "",
    icon : "",
    total : "",
    color : "",
    isDanger : false,
    valorReal : "",
    creditoICMS : "",
    valorVenda : "",
    valorICMSDestino : "",
    valorICMSDestinoPagar : "",
    creditoICMSRestante : "",
    valorPIS : "",
    valorCOFINS : "",
    valorContrSocial : "",
    IRPJ : "",
    lucro : "",
    percentualLucroEsperado : "5",
    adicionalFinanceiro : "",
    lucroBrutoRS : "",
    lucroBrutoPerc : "",
    taxaEmprestimo : "",
    prazoCompra : "",
    tempoInternacao : ""

  };
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  form()
  {
    if(!this.money || !this.tax)
      return false;
    
    // var money = this.money;
    // var totalValue = ((this.money*this.tax) / 100 );
    // totalValue = (parseFloat(totalValue.toString())+parseFloat(money.toString()));
    this.haveResult = true;
    // this.result.totalInt = parseFloat( this.formatReal(totalValue) );
    // this.result.total = this.formatMoney(this.result.totalInt);
    // console.log( this.result );
    this.doCalculo();
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

  fixValores(valor) {
    return parseFloat(valor) 
    return parseFloat(valor.replace('R$ ', '').replace('R$', '').replace('%', '').replace(' ', '').replace(',', '.')) 
  }

  fixString(valor, tipo) {
    var retorno = "";

    if (tipo == 1) {
        retorno = "R$ " + valor.toFixed(2).toString().replace('.', ',');
    }
    else if (tipo == 2) {
        var x = (valor).toFixed(2).toString().replace('.', ',');

        retorno = x + "%";
    }

    return retorno;
  }

  doCalculo() 
  {
    this.result.percentualLucroEsperado = this.tax.toString();
    var valorCompra = this.fixValores(this.money);
    var icmsCompra = this.fixValores(this.icms) / 100;
    var lucroEsperado = this.fixValores(this.tax) / 100;
    var icmsDestino = this.fixValores(this.icms) / 100;

    var valorCredito = valorCompra * icmsCompra;
    var valorReal =  Math.abs(valorCompra - valorCredito);
    var valorVenda = valorCompra + (valorCompra * lucroEsperado);
    var valorICMSDestino = valorVenda * icmsDestino;
    var creditoICMSRestante = (valorCredito - valorICMSDestino);
    var lucro = valorVenda - valorCompra;

    var ICMSPagar = 0;

    if (creditoICMSRestante < 0) {
        ICMSPagar = creditoICMSRestante;

        creditoICMSRestante = 0;
    }

    var PIS = (valorVenda * 0.0065);
    var COFINS = (valorVenda * 0.03);
    var contrSocial = (valorVenda * 0.0108);
    var IRPJ = (valorVenda * 0.0132);

    this.result.valorReal = this.fixString(valorReal, 1);
    this.result.creditoICMS = this.fixString(valorCredito, 1);
    this.result.valorVenda = this.fixString(valorVenda, 1);
    this.result.valorICMSDestino = this.fixString(valorICMSDestino, 1);
    this.result.valorICMSDestino = this.fixString((valorICMSDestino * -1), 1);
    this.result.valorICMSDestinoPagar = this.fixString((ICMSPagar), 1);
    this.result.creditoICMSRestante = this.fixString((creditoICMSRestante * -1), 1);
    this.result.valorPIS = this.fixString((PIS * -1), 1);
    this.result.valorCOFINS = this.fixString((COFINS * -1), 1);
    this.result.valorContrSocial = this.fixString((contrSocial * -1), 1);
    this.result.valorContrSocial = this.fixString((contrSocial * -1), 1);
    this.result.IRPJ = this.fixString((IRPJ * -1), 1);
    this.result.lucro = this.fixString((lucro), 1);


    var taxaEmprestimo = this.fixValores(this.result.taxaEmprestimo);

    var valorAdicFinanceiro = 0;

    if (taxaEmprestimo > 0)
    {
        var prazoCompra = this.fixValores(this.result.taxaEmprestimo);
        var prazoVenda = this.fixValores(this.result.taxaEmprestimo);
        var tempoInternacao = this.fixValores(this.result.tempoInternacao);

        console.log(prazoCompra);
        console.log(prazoVenda);
        console.log(tempoInternacao);

        var coeficienteJuros = parseFloat( (taxaEmprestimo / 30).toFixed(2) );

        var x = (prazoCompra - (tempoInternacao) - prazoVenda);

 
        var jurosProporcional = (x * coeficienteJuros) / 100;


        valorAdicFinanceiro = (valorCompra * (jurosProporcional)) * -1;

        if (valorAdicFinanceiro < 0 || isNaN(valorAdicFinanceiro))
        {
            valorAdicFinanceiro = 0;
        }

        this.result.adicionalFinanceiro = this.fixString((valorAdicFinanceiro * -1), 1);
    }

    var soma = lucro + ICMSPagar + (PIS * -1) + (COFINS * -1) + (contrSocial * -1) + (IRPJ * -1) + (creditoICMSRestante * -1) + (valorAdicFinanceiro * -1);

    this.result.lucroBrutoRS = this.fixString(soma, 1)
    this.result.lucroBrutoPerc = this.fixString((soma / valorCompra) * 100, 2);


  }

    
}
