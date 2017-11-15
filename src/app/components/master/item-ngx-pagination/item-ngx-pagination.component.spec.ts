import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemNgxPaginationComponent } from './item-ngx-pagination.component';

describe('ItemNgxPaginationComponent', () => {
  let component: ItemNgxPaginationComponent;
  let fixture: ComponentFixture<ItemNgxPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemNgxPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemNgxPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
