import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboveNavComponent } from './above-nav.component';

describe('AboveNavComponent', () => {
  let component: AboveNavComponent;
  let fixture: ComponentFixture<AboveNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboveNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboveNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
