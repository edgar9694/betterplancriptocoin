import { Component, OnInit } from '@angular/core';
import { CoinService } from 'src/app/data/service/coin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  message: string;
  errorState: boolean;

  constructor(
    private coinService: CoinService
  ){
    this.errorState = false;
    this.message = '';
  }

  ngOnInit(): void {
    this.getStatusApi();
  }

  getStatusApi(): void{
    this.coinService.stateApi().subscribe((data) => {
      if (!data) {
        this.errorState = true;
        this.message = 'Ha ocurrido un error, por favor intente mas tarde';
      }
    }, error =>{
      this.errorState = true;
      this.message = 'Ha ocurrido un error, por favor intente mas tarde';
    });
  }

}
