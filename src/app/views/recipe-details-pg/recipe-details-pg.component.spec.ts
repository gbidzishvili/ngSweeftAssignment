import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDetailsPgComponent } from './recipe-details-pg.component';

describe('RecipeDetailsPgComponent', () => {
  let component: RecipeDetailsPgComponent;
  let fixture: ComponentFixture<RecipeDetailsPgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecipeDetailsPgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecipeDetailsPgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
