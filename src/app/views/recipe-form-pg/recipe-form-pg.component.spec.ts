import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeFormPgComponent } from './recipe-form-pg.component';

describe('RecipeFormPgComponent', () => {
  let component: RecipeFormPgComponent;
  let fixture: ComponentFixture<RecipeFormPgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecipeFormPgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecipeFormPgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
