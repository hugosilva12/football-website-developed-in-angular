import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipaComponent } from './equipa.component';

describe('EquipaComponent', () => {
  let component: EquipaComponent;
  let fixture: ComponentFixture<EquipaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
