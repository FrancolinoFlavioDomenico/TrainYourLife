import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserInfoService } from '../shared/service/user-info.service';

@Component({
  selector: 'app-logon',
  templateUrl: './logon.component.html',
  styleUrls: ['./logon.component.scss'],
})
export class LogonComponent implements OnInit {
  public logonForm: FormGroup;
  public isCoachUser = false;

  constructor(
    private _userInfoService: UserInfoService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.logonForm = new FormGroup({
      mail: new FormControl(null, Validators.required),
      psw: new FormControl(null, Validators.required),
      name: new FormControl(null, Validators.required),
      surname: new FormControl(null, Validators.required),
    });
  }

  public onSelectUserType(userType: string): void {
    this._userInfoService.setStorageServiceValue(
      'isCoach',
      userType === 'coach'
    );
  }
}
