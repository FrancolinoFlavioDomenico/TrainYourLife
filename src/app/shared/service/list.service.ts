import { Injectable } from '@angular/core';
import { UserInfoService } from './user-info.service';
import { ListItemModel, ListPageModel } from '../model/list.model';
import { CoachModel } from '../model/coach.model';
import { ClientModel } from '../model/client.model';

@Injectable()
export class ListService {
  private _page: ListPageModel;

  constructor(private _userInforService: UserInfoService) {}

  public setPage(pageToset: ListPageModel): void {
    this._page = pageToset;
  }

  public getPage(): ListPageModel {
    return this._page;
  }
}
