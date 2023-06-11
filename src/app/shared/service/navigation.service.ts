import { NavigationEnd, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { ListService } from './list.service';
import {
  Location,
  LocationStrategy,
  PathLocationStrategy,
} from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ConfimModalComponent } from '../component/confim-modal/confim-modal.component';

@Injectable()
export class NavigationService {
  public savedRoutes: string[] = [];

  constructor(
    private _router: Router,
    private location: Location,
    private _listService: ListService,
    private _modalService: MatDialog
  ) {
    this._saveCurrentRoute();
  }

  private _saveCurrentRoute(): void {
    this._router.events.subscribe((e) => {
      console.log(e);
      if (e instanceof NavigationEnd) {
        if (!this.savedRoutes.find((i) => i === e.urlAfterRedirects))
          this.savedRoutes.push(e.urlAfterRedirects);
      }
    });
  }

  public getPreviuousPage(): void {
    if (
      this.savedRoutes.length <= 1 &&
      !this.savedRoutes.find((i) => i === '/logon')
    ) {
      this._modalService
        .open(ConfimModalComponent, {
          height: '150px',
          width: '300px',
          data: {
            msgBody: 'Sicuro di voler uscire?',
            isSuccessfulModal: false,
          },
        })
        .afterClosed()
        .subscribe({
          next: (res) => {
            if (res) {
              this.savedRoutes.pop();
              if (this.savedRoutes.length > 0) {
                this.location.back();
              } else {
                this._router.navigateByUrl('/login');
              }
            }
          },
        });
    } else {
      this.savedRoutes.pop();
      if (this.savedRoutes.length > 0) {
        this.location.back();
      } else {
        this._router.navigateByUrl('/login');
      }
    }
  }
}
