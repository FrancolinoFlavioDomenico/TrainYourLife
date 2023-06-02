import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../shared/service/user-info.service';
import {
  menuItemCoach,
  menuItemClient,
} from '../shared/constants/navbar-item.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public isCoach = this._userInfoService.getIsCoach();

  public menuItem = this._userInfoService.getIsCoach()
    ? menuItemCoach
    : menuItemClient;

  constructor(private _userInfoService: UserInfoService) {}

  public ngOnInit(): void {
    const homeItemIndex = this.menuItem.indexOf('home');

    if (homeItemIndex >= 0) this.menuItem.splice(homeItemIndex, 1);
  }

  public setCardCover(cardTitle: string) {
    return {
      'background-image': `url('assets/media/homeCardPicture/${cardTitle}.jpg')`,
      'background-repeat': 'no-repeat',
      'background-size': 'cover',
      'background-position': 'center center',
    };
  }
}
