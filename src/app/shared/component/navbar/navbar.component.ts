import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { menuItemClient, menuItemCoach } from '../../constant/navbar-item';
import { UserInfoService } from '../../service/user-info.service';

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

  ngOnInit(): void {
    this._userInfoService.isCoachChangeEvent$.subscribe({
      next: () =>
        this._userInfoService.getIsCoach()
          ? (this.menuItem = menuItemCoach)
          : (this.menuItem = menuItemClient),
    });
  }

  onItemClick(clckedItem: string) {
    this.navBarItemClick.emit(clckedItem);
  }
}
