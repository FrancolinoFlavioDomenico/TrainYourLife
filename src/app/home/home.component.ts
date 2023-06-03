import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../shared/service/user-info.service';
import { menuItemCoach, menuItemClient } from '../shared/constant/navbar-item';
import { Router } from '@angular/router';
import { ListService } from '../shared/service/list.service';
import { ListPageModel } from '../shared/model/list.model';
import { clientList, coachList } from '../shared/constant/peopleList';
import { cards, course, exercises } from '../shared/constant/stringList';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public isCoach = this._userInfoService.getIsCoach();

  public menuItem = this._userInfoService.getIsCoach()
    ? menuItemCoach
    : menuItemClient;
  public menuItemWhitOutHome: string[] = [];

  public clickedCard: string;

  constructor(
    private _userInfoService: UserInfoService,
    private _router: Router,
    private _listService: ListService
  ) {}

  public ngOnInit(): void {
    this.menuItem.forEach((item) => {
      if (item !== 'home') {
        this.menuItemWhitOutHome.push(item);
      }
    });
  }

  public setCardCover(cardTitle: string) {
    return {
      'background-image': `url('assets/media/homeCardPicture/${cardTitle}.jpg')`,
      'background-repeat': 'no-repeat',
      'background-size': 'cover',
      'background-position': 'center center',
    };
  }

  public onCardClick(card: string): void {
    this.clickedCard = card;
    this._mapPage();
    card = card.replaceAll(' ', '_');
    if (card === 'prenotazioni' && this.isCoach)
      this._router.navigate(['/' + card + '/coach']);
    else this._router.navigate(['/' + card]);
  }

  private _mapPage(): void {
    let pageToSet: ListPageModel;

    switch (this.clickedCard) {
      case 'clienti':
        pageToSet = {
          title: 'Seleziona cliente',
          list: clientList.map((item) => {
            return {
              title: `${item.name} ${item.surname}`,
              itemId: item.id,
              fromList: 'client',
              isWhitCheckBox: false,
            };
          }),
        };
        this._listService.setPage(pageToSet);
        break;
      case 'coach':
        pageToSet = {
          title: 'Seleziona cliente',
          list: coachList.map((item) => {
            return {
              title: `${item.name} ${item.surname}`,
              itemId: item.id,
              fromList: 'coach',
              isWhitCheckBox: false,
              subTitle: `Corsi offerti: ${item.offeredCourse}`,
            };
          }),
        };
        this._listService.setPage(pageToSet);
        break;
      case 'abbonamenti':
        pageToSet = {
          title: 'Seleziona abbonamento:',
          list: course.map((item) => {
            return {
              title: item,
              itemId: item,
              fromList: 'course',
              isWhitCheckBox: false,
            };
          }),
        };
        this._listService.setPage(pageToSet);
        break;
      case 'prenotazioni':
        pageToSet = {
          title: 'Prenota per:',
          list: course.map((item) => {
            return {
              title: item,
              itemId: item,
              fromList: 'course',
              isWhitCheckBox: false,
            };
          }),
        };
        this._listService.setPage(pageToSet);
        break;
      case 'abbonamenti':
        pageToSet = {
          title: 'Seleziona abbonamento:',
          list: course.map((item) => {
            return {
              title: item,
              itemId: item,
              fromList: 'course',
              isWhitCheckBox: false,
            };
          }),
        };
        this._listService.setPage(pageToSet);
        break;
      case 'schede':
        pageToSet = {
          title: 'Seleziona scheda:',
          list: cards.map((item) => {
            return {
              title: item,
              itemId: item,
              fromList: 'cards',
              isWhitCheckBox: false,
            };
          }),
        };
        this._listService.setPage(pageToSet);
        break;
      case 'esercizi':
        pageToSet = {
          title: 'Seleziona esercizio:',
          list: exercises.map((item) => {
            return {
              title: item,
              itemId: item,
              fromList: 'exercises',
              isWhitCheckBox: false,
            };
          }),
        };
        this._listService.setPage(pageToSet);
        break;
      case 'nuove iscrizioni':
        pageToSet = {
          title: 'Seleziona cliente:',
          list: clientList.map((item) => {
            return {
              title: `${item.name} ${item.surname}`,
              itemId: item.id,
              fromList: 'client',
              isWhitCheckBox: false,
            };
          }),
        };
        this._listService.setPage(pageToSet);
        break;

      default:
        break;
    }
  }
}
