import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../shared/service/user-info.service';
import { subscriptionList } from '../shared/constant/subscriptionList';
import { MatDialog } from '@angular/material/dialog';
import { PagamentiComponent } from '../pagamenti/pagamenti.component';
import { ConfimModalComponent } from '../shared/component/confim-modal/confim-modal.component';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss'],
})
export class SubscriptionComponent implements OnInit {
  public isCoach = this._userInfoService.getIsCoach();
  public list = subscriptionList;

  constructor(
    private _userInfoService: UserInfoService,
    private _modalServie: MatDialog
  ) {}
  public ngOnInit(): void {}

  public onRenewClick(): void {
    this._modalServie.open(PagamentiComponent, {
      width: '300px',
      height: '450px',
    });
  }
  public onCancelCLick(): void {
    this._modalServie.open(ConfimModalComponent, {
      width: '300px',
      height: '50px',
      data: {
        msgBody: 'Operazione avvenuta con successo',
        isSuccessfulModal: true,
      },
    });
  }
}
