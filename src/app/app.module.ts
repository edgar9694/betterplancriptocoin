import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoinService } from './data/service/coin.service';
import { ListCoinComponent } from './components/list-coin/list-coin.component';
import { CoinComponent } from './components/list-coin/coin/coin.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DetailCoinComponent } from './components/detail-coin/detail-coin.component';
import { SharedModule } from './shared/shared.module';
import { LayoutContainerComponent } from './layout/layout-container/layout-container.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ListCoinComponent,
    CoinComponent,
    DetailCoinComponent,
    LayoutContainerComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    SharedModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CoinService,
    {provide: LOCALE_ID, useValue: 'fr-FR' }
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
