import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  Form,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { RecipeService } from '../../core/services/recipe-service.service';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { ImgFileUploadService } from './services/image-upload/img-file-upload.service';
import { ErrorMessage } from './models/error-messages.model';
import { HttpClient } from '@angular/common/http';
import { ShareCardDataService } from '../../shared/services/share-card-data.service';
import { Recipe } from '../../shared/models/recipe.model';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form-pg.component.html',
  styleUrl: './recipe-form-pg.component.scss',
})
export class RecipeFormPgComponent implements OnInit, OnDestroy {
  fileName$: BehaviorSubject<string> = new BehaviorSubject('');
  baseString$: BehaviorSubject<string> = new BehaviorSubject('');
  recipeForm!: FormGroup;
  recipeData$!: Observable<Recipe>;
  editMode: boolean = false;
  editeRecipeId!: number;
  private subscriptions = new Subscription();
  constructor(
    private fb: FormBuilder,
    private recipeService: RecipeService,
    private imgFileUploadService: ImgFileUploadService,
    private router: Router,
    private shareCardDataService: ShareCardDataService
  ) {}
  ngOnInit(): void {
    this.initForm();
    this.subscribeToImageUpload();
    this.initEditMode();
  }

  private initForm(): void {
    this.recipeForm = this.fb.group({
      name: [null, [Validators.required, Validators.maxLength(20)]],
      description: [null, Validators.required],
      image: [null, Validators.required],
      ingredients: this.fb.array([this.getNewIngredient()]),
      directions: this.fb.array([this.getNewDirection()]),
      vegie: [false],
    });
  }
  // dynamically adding or removing ingredients and directions
  getIngredients(): FormArray {
    return this.recipeForm.get('ingredients') as FormArray;
  }
  getNewIngredient(): FormControl {
    return new FormControl(null, Validators.required);
  }
  getDirections(): FormArray {
    return this.recipeForm.get('directions') as FormArray;
  }
  getNewDirection(): FormControl {
    return new FormControl(null, Validators.required);
  }
  addNewIngredientBtnClidk(): void {
    this.getIngredients().push(this.getNewIngredient());
  }
  removeIngredientBtnClick(ingredientIndex: number) {
    this.getIngredients().removeAt(ingredientIndex);
  }
  addNewDirectionBtnClidk(): void {
    this.getDirections().push(this.getNewDirection());
  }
  removeDirectionBtnClick(directionIndex: number) {
    this.getDirections().removeAt(directionIndex);
  }
  private subscribeToImageUpload(): void {
    this.subscriptions.add(
      this.imgFileUploadService.BaseStringSrv$.subscribe((baseStr) => {
        this.recipeForm.get('image')?.setValue(baseStr);
      })
    );
  }
  // use service to upload image
  onFileSelected(event: Event): void {
    this.imgFileUploadService.uploadImage(event.target as HTMLInputElement);
  }
  // display error on invalid input
  checkIfInputHasError(control: string, error: string): boolean | undefined {
    // check formArray
    if (control.includes('ingredients') || control.includes('directions')) {
      let formArr = this.recipeForm.get?.(control.split('-')[0]) as FormArray;
      let idx = Number(control.split('-')[1]);
      return (
        formArr?.controls[idx].touched && formArr?.controls[idx].hasError(error)
      );
    }
    // check form control
    return (
      this.recipeForm.get(control)?.touched &&
      this.recipeForm.get(control)?.hasError(error)
    );
  }
  initEditMode() {
    let subscription = this.shareCardDataService.selectedRecipeId.subscribe(
      (id: number | null) => {
        if (id) {
          this.shareCardDataService.getRecipe(id).subscribe((res) => {
            this.fileName$.next(res.image.slice(0, 50));
            this.editeRecipeId = id;
            this.recipeForm.patchValue({
              name: res.name,
              description: res.description,
              image: res.image,
            });
            // Rebuild the ingredients FormArray
            const ingredientControls = res.ingredients.map(
              (ingredient: string) =>
                this.fb.control(ingredient, Validators.required)
            );
            this.recipeForm.setControl(
              'ingredients',
              this.fb.array(ingredientControls)
            );

            // Rebuild the directions FormArray
            const directionControls = res.directions.map((direction: string) =>
              this.fb.control(direction, Validators.required)
            );
            this.recipeForm.setControl(
              'directions',
              this.fb.array(directionControls)
            );
          });

          this.editMode = true;
        }
      }
    );
    this.subscriptions.add(subscription);
  }

  updateOnBtnClick(recipeForm: FormGroup) {
    let subscription = this.recipeService
      .updateRecipe(this.editeRecipeId, recipeForm.value)
      .subscribe(() => this.router.navigate(['/home']));
    this.subscriptions.add(subscription);
  }
  onFormsubmit() {
    this.recipeForm.markAllAsTouched();
    if (this.recipeForm.valid) {
      let subscription = this.recipeService
        .createRecipe(this.recipeForm.value)
        .subscribe(() => {
          this.subscriptions.add(subscription);
          this.imgFileUploadService.FileNameSrv$.next('No image uploaded yet.');
          this.imgFileUploadService.BaseStringSrv$.next('');
          this.router.navigate(['/home']);
          return;
        });
    }
    this.fileName$.next('* File upload is required');
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
    this.editMode = false;
  }
}
