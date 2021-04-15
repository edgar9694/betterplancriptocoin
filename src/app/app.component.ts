import { Component } from '@angular/core';
import { CoinService } from './data/coin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'betterplan';

  constructor(
    private coins: CoinService
  ) {
    this.listCoins()
  }

  listCoins(){
    this.coins.listCoins().subscribe(data =>{
      console.log(data);
      
    })
  }
}
