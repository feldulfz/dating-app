import { Component, inject, Input, signal } from '@angular/core';
import { AccountService } from '../../core/services/account-service';
import { Register } from "../account/register/register";
import { User } from '../../types/user';

@Component({
  selector: 'app-home',
  imports: [Register],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  protected registerMode = signal(false);
  protected accountService = inject(AccountService);

  // showRegister() {
  //   this.registerMode.set(true);
  // }

  showRegister(value: boolean) {
    this.registerMode.set(value);
  }
}
