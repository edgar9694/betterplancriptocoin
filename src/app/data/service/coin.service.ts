import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coin, CoinDetail } from '../schema/coin.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CoinService {

  constructor(private http: HttpClient) { }

  stateApi(): Observable<string> {
    return this.http.get<string>(environment.baseUrl + 'ping');
  }

  listCoins(): Observable<Coin[]> {
    return this.http.get<Coin[]>(environment.baseUrl + 'coins/list');
  }

  getCoin(coinId: string): Observable<CoinDetail> {
    return this.http.get<CoinDetail>(environment.baseUrl + `coins/${coinId}`);
  }
}
