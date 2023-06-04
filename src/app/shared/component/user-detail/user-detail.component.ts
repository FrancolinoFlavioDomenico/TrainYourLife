import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserInfoService } from '../../service/user-info.service';
import { coachList, clientList } from '../../constant/peopleList';
import { CoachModel } from '../../model/coach.model';
import { ClientModel } from '../../model/client.model';
import {
  mapListPageFromHome,
  mapListPageFromUserDetail,
} from '../../function/globalFunction';
import { ListService } from '../../service/list.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  public id: number | string;
  public isCoach = this._userInfoService.getIsCoach();
  public user: CoachModel | ClientModel;
  public clickedCard: string;

  constructor(
    private _userInfoService: UserInfoService,
    private _activedRoute: ActivatedRoute,
    private _router: Router,
    private _listService: ListService
  ) {}

  public ngOnInit(): void {
    this.id = +this._activedRoute.snapshot.paramMap.get('id');

    if (this.isCoach) this.user = coachList[!!this.id ? this.id : 0];
    else this.user = clientList[!!this.id ? this.id : 0];
  }

  public setCardCover(cardTitle: string) {
    return {
      'background-image': `url('assets/media/userDetailMedia/${cardTitle}.jpg')`,
      'background-repeat': 'no-repeat',
      'background-size': 'cover',
      'background-position': 'center center',
    };
  }

  public onCardClick(card: string): void {
    this.clickedCard = card;
    this._listService.setPage(mapListPageFromUserDetail(card));
    card = card.replaceAll(' ', '_');
    this._router.navigate(['/' + card]);
  }

  public getOfferedCourse(coachId: number): string[] {
    return coachList[coachId].offeredCourse;
  }
}
