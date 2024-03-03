import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeHomePgComponent } from './recipe-home-pg.component';

describe('RecipeHomePgComponent', () => {
  let component: RecipeHomePgComponent;
  let fixture: ComponentFixture<RecipeHomePgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecipeHomePgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecipeHomePgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
