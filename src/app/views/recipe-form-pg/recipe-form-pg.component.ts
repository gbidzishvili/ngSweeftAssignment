import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  Form,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { RecipeServiceService } from '../../core/services/recipe-service.service';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { ImgFileUploadService } from './services/image-upload/img-file-upload.service';
import { ErrorMessage } from './models/error-messages.model';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form-pg.component.html',
  styleUrl: './recipe-form-pg.component.scss',
})
export class RecipeFormPgComponent implements OnInit, OnDestroy {
  fileName$: BehaviorSubject<string> = new BehaviorSubject('');
  baseString$: BehaviorSubject<string> = new BehaviorSubject('');
  recipeForm!: FormGroup;
  formSubscription!: Subscription;
  errors = ['required', 'maxlength', 'pattern'];
  errorMessages: ErrorMessage = {
    required: '* This field is required',
    maxlength: '* Text cannot exceed 20 characters',
    // pattern: '* Use only English letters',
  };
  constructor(
    private fb: FormBuilder,
    private recipeService: RecipeServiceService,
    private imgFileUploadService: ImgFileUploadService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.recipeForm = this.fb.group({
      name: [null, [Validators.required, Validators.maxLength(20)]],
      description: [null, Validators.required],
      image: [null, Validators.required],
      ingredients: this.fb.array([new FormControl(null, Validators.required)]),
      directions: this.fb.array([new FormControl(null, Validators.required)]),
      vegie: [false],
    });
    this.fileName$ = this.imgFileUploadService.FileNameSrv$;
    this.imgFileUploadService.BaseStringSrv$.subscribe((baseStr) =>
      this.recipeForm.get('image')?.setValue(baseStr)
    );
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
  // use service to upload image
  onFileSelected(event: Event): void {
    this.imgFileUploadService.uploadImage(event.target as HTMLInputElement);
  }
  // display error on invalid input
  checkIfInputHasError(control: string, error: string): boolean | undefined {
    return (
      this.recipeForm.get(control)?.touched &&
      this.recipeForm.get(control)?.hasError(error)
    );
  }

  onFormsubmit() {
    this.recipeForm.markAllAsTouched();
    if (this.recipeForm.valid) {
      this.formSubscription = this.recipeService
        .createRecipe(this.recipeForm.value)
        .subscribe();
      this.imgFileUploadService.FileNameSrv$.next('No image uploaded yet.');
      this.imgFileUploadService.BaseStringSrv$.next('');
      this.router.navigate(['/home']);

      return;
    }
    this.fileName$.next('* File upload is required');
  }

  ngOnDestroy() {
    this.formSubscription?.unsubscribe();
  }
}
