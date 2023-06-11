import { Component, Input, OnInit } from '@angular/core';
import { NavigationService } from '../../service/navigation.service';
import { Router } from '@angular/router';
import { UserInfoService } from '../../service/user-info.service';
import { ListService } from '../../service/list.service';

@Component({
  selector: 'app-title-page-bar',
  templateUrl: './title-page-bar.component.html',
  styleUrls: ['./title-page-bar.component.scss'],
})
export class TitlePageBarComponent implements OnInit {
  @Input() titlePage: string;
  @Input() subTitle: string;

  constructor(
    private _navigationService: NavigationService,
    private _router: Router,
    private _usernInfoService: UserInfoService,
    private _listService: ListService
  ) {}

  public ngOnInit(): void {}

  public onBackClick() {
    if (
      this._router.url.includes('progressi') &&
      !this._usernInfoService.getIsCoach()
    ) {
      this._navigationService.savedRoutes = [
        { url: '/home', listPageData: this._listService.getPage() },
      ];
      this._router.navigate(['/home']);
    } else {
      this._navigationService.getPreviuousPage();
    }
  }
}
