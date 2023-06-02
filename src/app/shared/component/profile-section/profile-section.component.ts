import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../../service/user-info.service';

@Component({
  selector: 'app-profile-section',
  templateUrl: './profile-section.component.html',
  styleUrls: ['./profile-section.component.scss'],
})
export class ProfileSectionComponent implements OnInit {
  public isCoach = this._userInfoService.getIsCoach();

  constructor(private _userInfoService: UserInfoService) {}

  public ngOnInit(): void {}
}
