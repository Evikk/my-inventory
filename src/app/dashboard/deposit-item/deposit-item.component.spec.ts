import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositItemComponent } from './deposit-item.component';

describe('DepositItemComponent', () => {
  let component: DepositItemComponent;
  let fixture: ComponentFixture<DepositItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
