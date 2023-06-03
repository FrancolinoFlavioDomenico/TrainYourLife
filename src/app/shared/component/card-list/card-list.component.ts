import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../../service/user-info.service';
import { ListService } from '../../service/list.service';
import { ListItemModel } from '../../model/list.model';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent implements OnInit {
  public page = this._listService.getPage();

  constructor(
    private _listService: ListService,
    private _router: Router,
    private _activeRoute: ActivatedRoute
  ) {}

  public ngOnInit(): void {}

  public onItemClick(itemClicked: ListItemModel): void {
    if (!itemClicked.isWhitCheckBox) {
      this._router.navigate([itemClicked.urlToRedirect.toString()], {
        relativeTo: this._activeRoute,
      });
    }
  }
}
