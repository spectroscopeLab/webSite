import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisvisComponent } from './misvis.component';

describe('MisvisComponent', () => {
  let component: MisvisComponent;
  let fixture: ComponentFixture<MisvisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisvisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MisvisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
