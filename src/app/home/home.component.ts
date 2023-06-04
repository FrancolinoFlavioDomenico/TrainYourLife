import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../shared/service/user-info.service';
import { menuItemCoach, menuItemClient } from '../shared/constant/navbar-item';
import { Router } from '@angular/router';
import { ListService } from '../shared/service/list.service';
import { ListPageModel } from '../shared/model/list.model';
import { clientList, coachList } from '../shared/constant/peopleList';
import { cards, course, exercises } from '../shared/constant/gymList';
import { mapListPageFromHome } from '../shared/function/globalFunction';

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
  public menuItemWhitOutHome: string[] = [];

  public clickedCard: string;

  constructor(
    private _userInfoService: UserInfoService,
    private _router: Router,
    private _listService: ListService
  ) {}

  public ngOnInit(): void {
    this.menuItem.forEach((item) => {
      if (item !== 'home') {
        this.menuItemWhitOutHome.push(item);
      }
    });
  }

  public setCardCover(cardTitle: string) {
    return {
      'background-image': `url('assets/media/homeCardPicture/${cardTitle}.jpg')`,
      'background-repeat': 'no-repeat',
      'background-size': 'cover',
      'background-position': 'center center',
    };
  }

  public onCardClick(card: string): void {
    this.clickedCard = card;
    this._listService.setPage(mapListPageFromHome(card));
    card = card.replaceAll(' ', '_');
    this._router.navigate(['/' + card]);
  }
}
