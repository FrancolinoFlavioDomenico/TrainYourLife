import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { SessionStorageService } from 'angular-web-storage';

@Component({
  selector: 'app-logon',
  templateUrl: './logon.component.html',
  styleUrls: ['./logon.component.scss'],
})
export class LogonComponent implements OnInit {
  public logonForm: FormGroup;
  public isCoachUser = false;

  constructor(
    private _stroageService: SessionStorageService,
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

  public onLoginClick(): void {
    this._stroageService.set(
      'userType',
      this.logonForm.get('mail').value.toString().includes('coach')
        ? 'coach'
        : 'client'
    );
  }
}
