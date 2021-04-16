import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { CoinDetail } from 'src/app/data/schema/coin.model';
import { CoinService } from 'src/app/data/service/coin.service';

@Component({
  selector: 'app-detail-coin',
  templateUrl: './detail-coin.component.html',
  styleUrls: ['./detail-coin.component.sass']
})
export class DetailCoinComponent implements OnInit {
  chevronLeft = faChevronLeft;
  coinId: string;
  public coin: CoinDetail = {
    categories: [],
    coingecko_rank: NaN,
    coingecko_score: NaN,
    community_data: {},
    community_score: NaN,
    country_origin: '',
    description: {},
    id: '',
    image: {},
    last_updated: '',
    links: {},
    localization: {},
    market_data: {
      current_price: {},
      market_cap: {},
      fully_diluted_valuation: {},
      high_24h: {},
      low_24h: {},
      circulating_supply: 0,
      max_supply: 0,
    },
    market_cap_rank: 0,
    name: '',
    platforms: [],
    symbol: ''
  };
  coinLoaded: boolean;
  isCollapsed: boolean;
  platform: boolean;
  listCurrenciesForm: FormControl = new FormControl();
  currencies: Record<string, number> = {};
  currenciesFiltered: string[] = [];
  currency: string;
  currencyPrice: string;
  language: string;
  errorState: boolean;
  message: string;

  constructor(
    private coinService: CoinService,
    private route: ActivatedRoute
  ) {
    this.coinId = '';
    this.coinLoaded = false;
    this.isCollapsed = false;
    this.platform = false;
    this.errorState = false;
    this.currency = '';
    this.currencyPrice = '';
    this.language = 'en';
    this.message = '';
  }

  ngOnInit(): void {
    this.coinId = this.route.snapshot.params.id;
    this.getCoin();
  }

  getCoin(): void {
    // tslint:disable-next-line: deprecation
    this.coinService.getCoin(this.coinId).subscribe(data => {
      this.coin = data;
      this.coinLoaded = true;
      this.currencies = this.coin.market_data.current_price;
      this.currency = 'usd';
      this.platform = this.coin.platforms.length > 0 ? true : false;
      this.setPrice(this.currency);
    }, error => {
      this.errorState = true;
      this.message = 'Ha ocurrido un error, por favor intente mas tarde';
    });
  }

  setPrice(currency: string): void {
    this.currency = currency;
    this.isCollapsed = true;
    if (String((this.currencies[this.currency])).includes('e-')){
      this.currencyPrice = (this.currencies[this.currency]).toFixed(9);
    } else {
      this.currencyPrice = String(this.currencies[this.currency]);
    }
  }

  removePrice(): void {
    this.listCurrenciesForm.setValue('');
    this.currency = '';
    this.currencyPrice = '0';
    this.isCollapsed = false;
    this.filterSelect();
  }

  filterSelect(): void {
    this.currenciesFiltered = Object.keys(this.currencies).filter(c => c.includes(this.listCurrenciesForm.value))
    .slice();
  }

}
