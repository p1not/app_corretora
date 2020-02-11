import { Component } from '@angular/core';

import { InvestirPage } from '../investir/investir';
import { CarteiraPage } from '../carteira/carteira';
import { AcompanharPage } from '../acompanhar/acompanhar';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AcompanharPage;
  tab2Root = InvestirPage;
  tab3Root = CarteiraPage;

  constructor() {

  }
}
