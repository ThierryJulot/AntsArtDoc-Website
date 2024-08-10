import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';  // Importez Router

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      from_name: ['', Validators.required],
      from_email: ['', [Validators.required, Validators.email]],
      to_name: ['AntsArtDoc'],
      message: ['', Validators.required],
      numero: [''],
    });
  }

  ngOnInit() {}

  updateErrorMessage() {
    // Implementation of error message update if needed
  }

  send() {
    if (this.form.invalid) {
      this.updateErrorMessage();
      return;
    }

    emailjs
      .send(
        'service_ykq8uh5',
        'template_2lxj8wi',
        this.form.value,
        'RnrEw8UEhzWoahED2'
      )
      .then((response) => {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: 'success',
          title: 'Appointment added in successfully',
        });
        this.form.reset();
        this.router.navigate(['/Accueil']);
      })
      .catch((error) => {
        console.error("Erreur lors de l'envoi de l'email", error);
      });
  }
}
