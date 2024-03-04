import { Injectable } from '@angular/core';
import 'animate.css';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root',
})
export class ShowAlertService {
  constructor() {}
  showAlert() {
    Swal.fire({
      title:
        '<h1 ><span style="color:orange">Invalid file type!</span> <br> Only .img and .jpg allowed.</h1>',
      width: 367,
      showClass: {
        popup: `
        animate__animated
        animate__fadeInUp
        animate__faster
        `,
      },
      hideClass: {
        popup: `
        animate__animated
        animate__fadeOutDown
        animate__faster
        `,
      },
    });
  }
}
