import { Component, Input, OnInit } from '@angular/core';
import { UserInfoService } from '../../service/user-info.service';
import { ActivatedRoute } from '@angular/router';
import { ClientModel } from '../../model/client.model';
import { CoachModel } from '../../model/coach.model';
import { clientList, coachList } from '../../constant/peopleList';

@Component({
  selector: 'app-profile-section',
  templateUrl: './profile-section.component.html',
  styleUrls: ['./profile-section.component.scss'],
})
export class ProfileSectionComponent implements OnInit {
  public isCoach = this._userInfoService.getIsCoach();
  public id: number;
  @Input() public user: ClientModel | CoachModel;

  @Input() public isHomePage = true;

  constructor(
    private _userInfoService: UserInfoService,
    private _activedRoute: ActivatedRoute
  ) {}

  public ngOnInit(): void {}
}
