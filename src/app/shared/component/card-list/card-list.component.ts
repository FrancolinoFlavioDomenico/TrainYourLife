import {
  Component,
  OnInit,
  AfterViewInit,
  AfterViewChecked,
  AfterContentInit,
} from '@angular/core';
import { ListService } from '../../service/list.service';
import { ListItemModel } from '../../model/list.model';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { UserInfoService } from '../../service/user-info.service';
import { ConfimModalComponent } from '../confim-modal/confim-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent
  implements OnInit, AfterViewInit, AfterContentInit
{
  public page = this._listService.getPage();

  public isCoach = this._userInfoService.getIsCoach();

  public componentIsInit = false;

  constructor(
    private _listService: ListService,
    private _router: Router,
    private _activeRoute: ActivatedRoute,
    private _userInfoService: UserInfoService,
    private _modalServie: MatDialog
  ) {}

  public ngOnInit(): void {}

  public onItemClick(itemClicked: ListItemModel): void {
    if (!itemClicked.isWhitCheckBox) {
      this._router.navigate([itemClicked.urlToRedirect.toString()], {
        relativeTo: this._activeRoute,
      });
    }
  }

  public showConfirmButton(): boolean {
    return this.isCoach && this.page.showConfirmButton;
  }

  public onConfirmClick(): void {
    this._modalServie
      .open(ConfimModalComponent, {
        width: '300px',
        height: '50px',
        data: {
          msgBody: 'Operazione avvenuta con successo',
          isSuccessfulModal: true,
        },
      })
      .afterClosed()
      .subscribe(() => {
        this._userInfoService.setStorageServiceValue('isCoach', this.isCoach);

        this._userInfoService.setStorageServiceValue('isLogged', true);
      });
  }

  public onAddCLick(): void {
    if (this._router.url === '/schede') this._router.navigate(['/schede/0']);
    else this._router.navigate(['/esercizi/0']);
  }

  public ngAfterViewInit(): void {
    //this.componentIsInit = true;
  }

  public ngAfterContentInit(): void {
    setTimeout(() => {
      this.componentIsInit = true;
    }, 200);
  }
}
