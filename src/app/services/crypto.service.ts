import { Injectable } from '@angular/core';
import { CryptoCurrency, CryptoCurrencyDetailsResponse } from '../interfaces/CryptoCurrency';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {
  private urlCryptoCurrencies: string = 'https://api.coinpaprika.com/v1/coi';
  private urlCurrencyDetails: string = 'https://api.kucoin.com/api/v1/market/stats';
  private urlMarketOverview: string = 'https://cryptingup.com/api/markets';

  async getCryptoCurrencies(): Promise<CryptoCurrency[]> {
    try {
      const data = await fetch(this.urlCryptoCurrencies);
      const currencies = await data.json();
      return currencies.slice(0, 20) ?? [];
    } catch (error) {
      console.log('An error occurred while fetching data', error);
      throw error;
    }
    
  }

  async getCurrencyDetails(symbol: string): Promise<CryptoCurrencyDetailsResponse> {
    try {
     const url = `${this.urlCurrencyDetails}?symbol=${symbol}`;
      const data = await fetch(url);
      return await data.json(); 
    } catch (error) {
      console.log('An error occurred fetching data', error);
      throw error;
    }
       
  }

  async getMarketOverview(): Promise<any> {
    try {
      const data = await fetch(this.urlMarketOverview);
      return (await data.json()); 
    } catch (error) {
      console.log('An error occurred fetching data', error);
      throw error;
    }      
  }    
}
