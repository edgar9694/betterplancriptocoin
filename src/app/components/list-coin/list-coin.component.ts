import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { from } from 'rxjs';
import { map, delay, delayWhen, pluck } from 'rxjs/operators';
import { Coin } from 'src/app/data/schema/coin.model';
import { CoinService } from 'src/app/data/service/coin.service';

@Component({
  selector: 'app-list-coin',
  templateUrl: './list-coin.component.html',
  styleUrls: ['./list-coin.component.sass']
})
export class ListCoinComponent implements OnInit {

  public coins: Coin[] = [];
  coinsFiltered: Coin[] = [];
  listLoaded: boolean;
  errorState: boolean;
  message: string;
  listCoinsForm: FormControl = new FormControl();

  constructor(
    private coinService: CoinService
  ) {
    this.listLoaded = false;
    this.errorState = false;
    this.message = '';
  }

  ngOnInit(): void {
    this.listCoins();
  }

  listCoins(){
    this.coinService.listCoins().subscribe( data => {
        this.coins = data;
        this.listLoaded = true;
      }, error => {
        this.errorState = true;
        this.message = 'Ha ocurrido un error, por favor intente mas tarde';
      });
    }
}
