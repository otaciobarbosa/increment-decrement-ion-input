import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

private currentNumber = 0;
complementos: any = [];  
  constructor(public navCtrl: NavController) {
  this.complementos = [{"id":"1 ","complemento":"LEITE EM PO"},
                {"id":"2 ","complemento":"LEITE CONDENSADO"},
                {"id":"3 ","complemento":"CONFEITOS DE CHOCOLATE"},
                {"id":"4 ","complemento":"PACOCA"},
                {"id":"5 ","complemento":"MORANGO"},
                {"id":"7 ","complemento":"BANANA"},
                {"id":"9 ","complemento":"GRANOLA"},
                {"id":"10","complemento":"BANANA FLAMBADA"},
                {"id":"11","complemento":"MEL"},
                {"id":"12","complemento":"OVOMALTINE"},
                {"id":"13","complemento":"SUCRILHOS"},
                {"id":"14","complemento":"ABACAXI"},
                {"id":"15","complemento":"KIWI"},
                {"id":"16","complemento":"CALDA DE MORANGO"},
                {"id":"17","complemento":"CHOCOCOCO"},
                {"id":"18","complemento":"CHOCOBISCOITO"},
                {"id":"19","complemento":"GELEIA DE MORANGO"},
                {"id":"20","complemento":"MANGA"},
                {"id":"21","complemento":"CALDA DE CHOCOLATE"},
                {"id":"22","complemento":"CHANTILLY"},
                {"id":"23","complemento":"SORVETE DE CREME"},
                {"id":"24","complemento":"TRUFA BRANCA"}];
              }

  private increment () {
    this.currentNumber++;
      if(this.currentNumber > 4 ){
      alert("Só é possivel adicionar 4 itens !");
      this.currentNumber = 4;
    }
  }

  private decrement () {
   this.currentNumber--;
    if(this.currentNumber < 0 ){
      alert("Não é permitido abaixo de 0 !");
      this.currentNumber = 0;
    }
  }

}
