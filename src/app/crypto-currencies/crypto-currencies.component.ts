import { Component, inject } from '@angular/core';
import { CryptoService } from '../services/crypto.service';
import { CommonModule } from '@angular/common';
import { CryptoCurrency } from '../interfaces/CryptoCurrency';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-crypto-currencies',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './crypto-currencies.component.html',
  styleUrl: './crypto-currencies.component.css'
})
export class CryptoCurrenciesComponent {
  cryptoService: CryptoService = inject(CryptoService);
  cryptoCurencies: CryptoCurrency[] = [];

  
  constructor() { 
    this.cryptoService.getCryptoCurrencies()
      .then(currenciesData => this.cryptoCurencies = currenciesData)
      .catch(() => this.cryptoCurencies = []);
  }
}
