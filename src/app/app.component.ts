import { Component } from '@angular/core';
import { CoinService } from './data/service/coin.service';
import { Coin } from './data/schema/coin.model';
import { noop, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'betterplan';
}
