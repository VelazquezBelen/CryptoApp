import { Component, inject } from '@angular/core';
import { CryptoService } from '../../services/crypto.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-market-overview',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './market-overview.component.html',
  styleUrl: './market-overview.component.css'
})
export class MarketOverviewComponent {
  cryptoService: any = inject(CryptoService);
  marketOvierview: any;

  constructor() { 
    this.cryptoService.getMarketOverview()
      .then((marketOverviewData: any) => this.marketOvierview = marketOverviewData)
  }
}
