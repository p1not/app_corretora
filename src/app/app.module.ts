import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { InvestirPage } from '../pages/investir/investir';
import { CarteiraPage } from '../pages/carteira/carteira';
import { AcompanharPage } from '../pages/acompanhar/acompanhar';
import { TabsPage } from '../pages/tabs/tabs';
import { AcaoComprarPage } from '../pages/acao-comprar/acao-comprar';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AcaoProvider } from '../pages/acao/acao-provider';
import { OrdemProvider } from '../pages/ordem/ordem-provide';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    MyApp,
    InvestirPage,
    CarteiraPage,
    AcompanharPage,
    TabsPage,
    AcaoComprarPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InvestirPage,
    CarteiraPage,
    AcompanharPage,
    TabsPage,
    AcaoComprarPage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    AcaoProvider,
    OrdemProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
