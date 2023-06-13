import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserInfoService } from '../shared/service/user-info.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfimModalComponent } from '../shared/component/confim-modal/confim-modal.component';

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
    private _router: Router,
    private _modalServie: MatDialog
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
    this.isCoachUser = userType === 'coach';
    this._userInfoService.setStorageServiceValue(
      'isCoach',
      userType === 'coach'
    );
  }
  public onFinishClick(): void {
    this._modalServie
      .open(ConfimModalComponent, {
        width: '300px',
        height: '50px',
        data: {
          msgBody: 'Registrazione avvenuta con successo',
          isSuccessfulModal: true,
        },
      })
      .afterClosed()
      .subscribe(() => {
        this._userInfoService.setStorageServiceValue(
          'isCoach',
          this.isCoachUser
        );

        this._userInfoService.setStorageServiceValue('isLogged', true);
      });
  }
}
