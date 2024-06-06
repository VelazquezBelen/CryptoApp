import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoCurrenciesComponent } from './crypto-currencies.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CryptoService } from '../services/crypto.service';

describe('CryptoCurrenciesComponent', () => {
  let component: CryptoCurrenciesComponent;
  let fixture: ComponentFixture<CryptoCurrenciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CryptoCurrenciesComponent, CommonModule, RouterModule.forRoot([])],
      providers: [CryptoService]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CryptoCurrenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
