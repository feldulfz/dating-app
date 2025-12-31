import { Component, inject, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegisterCreds, User } from '../../../types/user';
import { AccountService } from '../../../core/services/account-service';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  private accountService = inject(AccountService);
  cancelRegister = output<boolean>();
  protected creds = {} as RegisterCreds;

  register() {
    this.accountService.register(this.creds).subscribe({
      next: response => {
        console.log(response);
        this.cancel();
      },
      error: error => {
        console.log(error);
      }
    })
  }

  cancel() {
    this.cancelRegister.emit(false);
  }

  // register() {
  //   if (this.profileForm.valid && this.credentialsForm.valid) {
  //     const formData = { ...this.credentialsForm.value, ...this.profileForm.value };

  //     this.accountService.register(formData).subscribe({
  //       next: () => {
  //         this.router.navigateByUrl('/members');
  //       },
  //       error: error => {
  //         console.log(error);
  //         this.validationErrors.set(error)
  //       }
  //     })
  //   }
  // }
}
