import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform, ActionSheetController } from 'ionic-angular';
import { OrdemProvider } from '../ordem/ordem-provide';
import { OrdemModel } from '../ordem/ordemmodel';

@Component({
  selector: 'page-acompanhar',
  templateUrl: 'acompanhar.html'
})
export class AcompanharPage {

  ordem : OrdemModel
  ordens : OrdemModel[] = []

  constructor(public navCtrl: NavController, 
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController,
    public service : OrdemProvider) {
  }

  openMenu() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Deseja suspender a ordem xxx ?',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Suspender',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            console.log('Ordem Suspensa');
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel', 
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Ordem Cancelada');
          }
        }
      ]
    });
    actionSheet.present();
  }

  ionViewDidLoad() {
    //executar
    this.service.listarOrdens().subscribe(res=>{
      //retorno
    this.ordens = res
    })
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.service.listarOrdens().subscribe(res=>{
      //retorno
    this.ordens = res
    })
  }

}
