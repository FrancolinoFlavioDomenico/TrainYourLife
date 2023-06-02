import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SessionStorageService } from 'angular-web-storage';
import { ConfimModalComponent } from './shared/confim-modal/confim-modal.component';

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

  constructor(
    private _stroageService: SessionStorageService,
    private _router: Router,
    private _modalService: MatDialog
  ) {}

  public ngOnInit(): void {}

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
        next: (res) => (res ? this._router.navigate([`/login`]) : null),
      });
  }
}
