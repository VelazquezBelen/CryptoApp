import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CryptoCurrenciesComponent } from './crypto-currencies/crypto-currencies.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CryptoCurrenciesComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'crypto-app';
}
