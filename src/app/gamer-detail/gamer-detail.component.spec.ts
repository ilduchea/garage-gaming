import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamerDetailComponent } from './gamer-detail.component';

describe('GamerDetailComponent', () => {
  let component: GamerDetailComponent;
  let fixture: ComponentFixture<GamerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamerDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
