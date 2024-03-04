import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ShowAlertService } from '../show-Alert/show-alert.service';

@Injectable({
  providedIn: 'root',
})
export class ImgFileUploadService {
  FileNameSrv$: BehaviorSubject<string> = new BehaviorSubject('');
  BaseStringSrv$: BehaviorSubject<string> = new BehaviorSubject('');
  constructor(private showAlertService:ShowAlertService) {}

  uploadImage(fileInputElement: HTMLInputElement): void {
    const file = fileInputElement.files?.[0];
    console.log('upload', file, file && this.isValidFile(file.name));
    file && this.isValidFile(file.name)
      ? this.processFile(file)
      : this.showAlertService.showAlert()
  }
  isValidFile = (fileName: string): boolean => {
    const validExtensions = ['img', 'jpg'];
    const fileExtension = fileName.split('.').pop()?.toLowerCase() as string;
    return validExtensions.includes(fileExtension);
  };
  processFile = (file: File): void => {
    this.FileNameSrv$.next(file.name);
    const reader = new FileReader();
    reader.onloadend = () => {
      const baseStringResult = reader.result as string;
      // this.recipeForm.get('image')?.setValue(baseStringResult);
      this.BaseStringSrv$.next(baseStringResult);

      // console.log(this.recipeForm.get('image'));
    };
    reader.readAsDataURL(file);
  };
}
