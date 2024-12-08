import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsptComponent } from './teamspt.component';

describe('TeamsptComponent', () => {
  let component: TeamsptComponent;
  let fixture: ComponentFixture<TeamsptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamsptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
