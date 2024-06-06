import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveCurrenciesComponent } from './live-currencies.component';
import { CryptoService } from '../../services/crypto.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { of } from 'rxjs';

describe('LiveCurrenciesComponent', () => {
  let component: LiveCurrenciesComponent;
  let fixture: ComponentFixture<LiveCurrenciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiveCurrenciesComponent, RouterModule.forRoot([]), CommonModule],
      providers: [CryptoService, {
        provide: ActivatedRoute,
        useValue: {
          snapshot: {
            params: of({ symbol: 'BTC' }) 
          }
        }
      }]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LiveCurrenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
