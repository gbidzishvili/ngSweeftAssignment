import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterFavoritesComponent } from './filter-favorites.component';

describe('FilterFavoritesComponent', () => {
  let component: FilterFavoritesComponent;
  let fixture: ComponentFixture<FilterFavoritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilterFavoritesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
