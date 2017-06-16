import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGamerComponent } from './new-gamer.component';

describe('NewGamerComponent', () => {
  let component: NewGamerComponent;
  let fixture: ComponentFixture<NewGamerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewGamerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewGamerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
