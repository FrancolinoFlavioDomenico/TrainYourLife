import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NavigationEnd, NavigationStart, Route, Router } from '@angular/router';
import { SessionStorageService } from 'angular-web-storage';
import { ConfimModalComponent } from './shared/confim-modal/confim-modal.component';
import { UserInfoService } from './shared/service/user-info.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  title = 'trainYourLife';

  public toggleMenu = false;
  public valueEmittedFromChildComponent: string;

  public isLogged: boolean;

  public titlePage: string;

  constructor(
    private _userInfoService: UserInfoService,
    private _router: Router,
    private _modalService: MatDialog
  ) {}

  public ngOnInit(): void {
    this.isLogged = this._userInfoService.getIsLogged();

    this._userInfoService.isLoggedChangeEvent$.subscribe({
      next: (res) => (this.isLogged = res),
    });

    this._userInfoService.isCoachChangeEvent$.subscribe({
      next: (res) => (this.isLogged = res),
    });

    this._router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((res) => {
        this.titlePage = (res as NavigationEnd).url
          .replace('/', '')
          .toUpperCase();
      });
  }

  public onHamburgerMenuClicked() {
    this.toggleMenu = !this.toggleMenu;
  }

  public onNavbarItemClicked(valueEmitted) {
    this.valueEmittedFromChildComponent = valueEmitted;
    this._router.navigate([`/${valueEmitted}`]);
    this.toggleMenu = !this.toggleMenu;
  }

  public onLogOutClick(): void {
    this._modalService
      .open(ConfimModalComponent, {
        height: '20%',
        width: '60%',
      })
      .afterClosed()
      .subscribe({
        next: (res) => {
          res ? this._router.navigate([`/login`]) : null;
          this._userInfoService.setStorageServiceValue('isLogged', false);
        },
      });
  }
}
