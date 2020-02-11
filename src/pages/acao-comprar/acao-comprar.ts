import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AcaoModel } from '../acao/acaomodel';
import { InvestirPage } from '../investir/investir';
import { OrdemModel } from '../ordem/ordemmodel';
import { AlertController } from 'ionic-angular';
import { OrdemProvider } from '../ordem/ordem-provide';

@IonicPage()
@Component({
  selector: 'page-acao-comprar',
  templateUrl: 'acao-comprar.html',
})
export class AcaoComprarPage {
  acao : AcaoModel
  ordem : OrdemModel
  ordens : OrdemModel[] = []
  qtd : number = 10;
  taxaB3 : number = 0.03
  taxaCorretagem : number = 0
  valorUnitario : number 
  valorOrdemCompra : number
  
  alertController: AlertController;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public service : OrdemProvider) {
    this.ordem = new OrdemModel()

    this.acao = navParams.data.acao
    this.valorUnitario = this.acao.valor
    this.valorOrdemCompra = (this.valorUnitario * this.qtd) + this.taxaCorretagem + this.taxaB3
  }

  comprarAcao(){
    
    //preparar a ordem
    this.ordem.cod_acao = this.acao.codigo
    this.ordem.quantidade = this.qtd
    this.ordem.status = "pendente"
    this.ordem.tipo = "compra"
    this.ordem.valor_unitario = this.valorUnitario
    this.ordem.valor_total = this.valorOrdemCompra = (this.valorUnitario * this.qtd) + this.taxaCorretagem + this.taxaB3

    /*validar aqui a regra:
      1) if(this.ordem.valor_total) <= sum(vr_total das ordens com status executada)
          {
            executa a ordem, avisa usuário, recarrega a página
          }
          else{
            avisa que não tem saldo disponível            
          }
    */    

    //executar a ordem
    this.service.create(this.ordem).subscribe(a=>{
      //Atualizar página
    this.navCtrl.push(InvestirPage);
    })    
  }

  calculaSaldo(){
    this.service.listarOrdens().subscribe(res=>{
      //retorno no array
    this.ordens = res
    })    
  }
}
