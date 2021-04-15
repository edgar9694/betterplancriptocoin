import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CoinService {

  constructor(private http: HttpClient) { }

  listCoins() {
    return this.http.get('https://api.coingecko.com/api/v3/coins/list');
  }
}
