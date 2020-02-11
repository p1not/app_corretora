import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { AcaoComprarPage } from '../acao-comprar/acao-comprar';
import { AcaoModel } from '../acao/acaomodel';
import { AcaoProvider } from '../acao/acao-provider';

@Component({
  selector: 'investir-about',
  templateUrl: 'investir.html'
})
export class InvestirPage {

  acoes : AcaoModel[]
  acao : AcaoModel
  searchQuery: string = '';

  constructor(public navCtrl: NavController,
              public navParams : NavParams,
              private service : AcaoProvider) {
    this.initializeItems(); 
  }

  initializeItems() {
    this.acoes = this.service.listarAcoes()
  }
  
  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.acoes = this.acoes.filter((acao) => {
        return (acao.codigo.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  openPage( acao: AcaoModel){
    this.navCtrl.push(AcaoComprarPage,{
      acao : acao         
    });
  }
}
