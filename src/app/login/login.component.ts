import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'angular-web-storage';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public isCoachUser = false;

  constructor(
    private _stroageService: SessionStorageService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      mail: new FormControl(null, Validators.required),
      psw: new FormControl(null, Validators.required),
    });
  }

  onLoginClick(): void {
    this._stroageService.set(
      'userType',
      this.loginForm.get('mail').value.toString().includes('coach')
        ? 'coach'
        : 'client'
    );
  }
}
