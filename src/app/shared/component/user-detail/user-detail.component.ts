import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserInfoService } from '../../service/user-info.service';
import { coachList, clientList } from '../../constant/peopleList';
import { CoachModel } from '../../model/coach.model';
import { ClientModel } from '../../model/client.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  public id: number | string;
  public isCoach = this._userInfoService.getIsCoach();
  public user: CoachModel | ClientModel;

  constructor(
    private _userInfoService: UserInfoService,
    private _activedRoute: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this.id = +this._activedRoute.snapshot.paramMap.get('id');

    if (this.isCoach) this.user = coachList[!!this.id ? this.id : 0];
    else this.user = clientList[!!this.id ? this.id : 0];
  }
}
