import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinodeComponent } from './cinode.component';

describe('CinodeComponent', () => {
  let component: CinodeComponent;
  let fixture: ComponentFixture<CinodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CinodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CinodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
