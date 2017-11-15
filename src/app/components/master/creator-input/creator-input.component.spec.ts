import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorInputComponent } from './creator-input.component';

describe('CreatorInputComponent', () => {
  let component: CreatorInputComponent;
  let fixture: ComponentFixture<CreatorInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatorInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatorInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
