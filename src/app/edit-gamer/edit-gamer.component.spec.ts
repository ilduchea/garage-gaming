import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGamerComponent } from './edit-gamer.component';

describe('EditGamerComponent', () => {
  let component: EditGamerComponent;
  let fixture: ComponentFixture<EditGamerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditGamerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGamerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
