import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPagingComponent } from './item-paging.component';

describe('ItemPagingComponent', () => {
  let component: ItemPagingComponent;
  let fixture: ComponentFixture<ItemPagingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemPagingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
