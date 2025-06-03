import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustmerListComponent } from './custmer-list.component';

describe('CustmerListComponent', () => {
  let component: CustmerListComponent;
  let fixture: ComponentFixture<CustmerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustmerListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustmerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
