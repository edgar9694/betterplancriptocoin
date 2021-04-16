import { Component, Input, OnInit } from '@angular/core';
import { Coin } from 'src/app/data/schema/coin.model';
import { CoinService } from 'src/app/data/service/coin.service';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.sass']
})
export class CoinComponent implements OnInit {

  @Input() coin: Coin = {
    id: '',
    name: '',
    symbol: ''
  };

  constructor(
    private coinService: CoinService
  ) { }

  ngOnInit(): void {
  }

  getCoin(id: string){
    this.coinService.getCoin(id).subscribe(data => {
      console.log(data);
    });
  }

}
