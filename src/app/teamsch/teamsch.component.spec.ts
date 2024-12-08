import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamschComponent } from './teamsch.component';

describe('TeamschComponent', () => {
  let component: TeamschComponent;
  let fixture: ComponentFixture<TeamschComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamschComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamschComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
