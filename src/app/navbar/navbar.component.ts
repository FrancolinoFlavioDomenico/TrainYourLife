import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SessionStorageService } from 'angular-web-storage';
import { menuItemClient, menuItemCoach } from '../shared/constant/navbar-item';
import { UserInfoService } from '../shared/service/user-info.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public menuItem = this._userInfoService.getIsCoach()
    ? menuItemCoach
    : menuItemClient;

  @Output() navBarItemClick: EventEmitter<string> = new EventEmitter<string>();

  constructor(private _userInfoService: UserInfoService) {}

  ngOnInit(): void {}

  onItemClick(clckedItem: string) {
    this.navBarItemClick.emit(clckedItem);
  }
}
