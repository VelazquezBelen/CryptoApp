import { Component, inject } from '@angular/core';
import { CryptoCurrencyDetails } from '../../interfaces/CryptoCurrency';
import { CryptoService } from '../../services/crypto.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-live-currencies',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './live-currencies.component.html',
  styleUrl: './live-currencies.component.css'
})
export class LiveCurrenciesComponent {
  private cryptoService: CryptoService = inject(CryptoService);
  private activatedRoute = inject(ActivatedRoute);
  currencyDetails: CryptoCurrencyDetails | undefined;
  cryptoSymbol: string = '';

  constructor() { 
    this.cryptoSymbol = this.activatedRoute.snapshot.params['symbol'];
    this.cryptoService.getCurrencyDetails(this.cryptoSymbol)
      .then(currencyData => this.currencyDetails = currencyData.data)
  }
}
