import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawItemComponent } from './withdraw-item.component';

describe('WithdrawItemComponent', () => {
  let component: WithdrawItemComponent;
  let fixture: ComponentFixture<WithdrawItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithdrawItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithdrawItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
