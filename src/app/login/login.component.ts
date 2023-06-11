import { UserInfoService } from './../shared/service/user-info.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavigationService } from '../shared/service/navigation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public isCoachUser = false;

  constructor(
    private _userInfoService: UserInfoService,
    private _router: Router,
    private _navigationService: NavigationService
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      mail: new FormControl(null, Validators.required),
      psw: new FormControl(null, Validators.required),
    });
  }

  onLoginClick(): void {
    this._userInfoService.setStorageServiceValue(
      'isCoach',
      this.loginForm.get('mail').value.toString().includes('coach')
        ? true
        : false
    );

    this._userInfoService.setStorageServiceValue('isLogged', true);
  }

  public onLogonClick(): void {
    // this._navigationService.savedRoutes = ['/logon'];
  }
}
