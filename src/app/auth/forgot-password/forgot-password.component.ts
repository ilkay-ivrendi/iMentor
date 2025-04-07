import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-forgot-password',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule
  ],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {
  form!: FormGroup;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar,
    private router: Router) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    if (this.form.valid) {
      const email = this.form.value.email;
      console.log('Reset email sent to:', this.form.value.email);
      // TODO: Trigger password reset email via service

      // Simulate sending reset email
      console.log('Reset email sent to:', email);

      // Show snackbar
      this.snackBar.open('Password reset link sent to your email.', 'Close', {
        duration: 3000
      });

      // Navigate to login page after short delay
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 500); // You can delay this slightly if needed
    }


  }
}