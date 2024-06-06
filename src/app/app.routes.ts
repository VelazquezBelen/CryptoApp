import { Routes } from '@angular/router';
import { CryptoCurrenciesComponent } from './crypto-currencies/crypto-currencies.component';
import { LiveCurrenciesComponent } from './crypto-currencies/live-currencies/live-currencies.component';
import { MarketOverviewComponent } from './crypto-currencies/market-overview/market-overview.component';

export const routes: Routes = [
    {
        path: '',
        component: CryptoCurrenciesComponent,
        title: 'Crypto Currencies page',
    },
    {
        path: 'live/:symbol',
        component: LiveCurrenciesComponent,
        title: 'Crypto Currency Live page',
    },
    {
        path: 'overview',
        component: MarketOverviewComponent,
        title: 'Market Ovierview page',
    }
];
