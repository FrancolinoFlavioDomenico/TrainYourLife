import {
  AfterViewInit,
  Component,
  OnInit,
  AfterViewChecked,
} from '@angular/core';
import { EventModel } from '../shared/model/event.model';
import { AddReservationModalComponent } from './add-reservation-modal/add-reservation-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { ConfimModalComponent } from '../shared/component/confim-modal/confim-modal.component';
import { UserInfoService } from '../shared/service/user-info.service';
import { course } from '../shared/constant/gymList';
import { eventList } from '../shared/constant/events';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss'],
})
export class ReservationsComponent implements OnInit, AfterViewInit {
  public yearMonths = [
    'Gennario',
    'Febbraio',
    'Marzo',
    'Aprile',
    'Maggio',
    'Giugno',
    'Luglio',
    'Agosto',
    'Settembre',
    'Ottobre',
    'Novembre',
    'Dicembre',
  ];
  public weekDays = ['', 'Lun.', 'Mar.', 'Mer.'];
  public weekDaysEN = ['', 'Mon', 'Tue', 'Wed'];
  public dayMonthNumber = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
  ];
  public hoursList: string[] = [];
  public cell = new Array<EventModel>(3);

  public date = new Date();

  public isCoach = this._userInfo.getIsCoach();

  constructor(
    private _modalServie: MatDialog,
    private _userInfo: UserInfoService
  ) {}

  public ngOnInit(): void {
    this.setHoursList();
  }

  public ngAfterViewInit(): void {
    document.getElementById('cell_0_0').innerHTML = eventList[0].name;
    document.getElementById('cell_2_2').innerHTML = eventList[1].name;
    document.getElementById('cell_8_1').innerHTML = eventList[2].name;
  }

  public getPageTitle(): string {
    return `${this.yearMonths[this.date.getMonth()]} ${
      (this, this.date.getFullYear())
    }`;
  }

  public getScheduleDaysHeader(): string {
    let data = this.date.toString();
    return `${
      this.weekDays[this.weekDaysEN.indexOf(data.substring(0, 3))]
    } ${this.date.getDate()}`;
  }

  public setHoursList(): void {
    for (let i = 9; i < 22; i++) {
      this.hoursList.push(`${i}:00`);
    }
  }

  public addReservation() {
    if (!this.isCoach) {
      this._modalServie
        .open(AddReservationModalComponent, {
          width: '300px',
          height: '370px',
        })
        .afterClosed()
        .subscribe((res) => {
          if (res) {
            this._modalServie.open(ConfimModalComponent, {
              width: '300px',
              height: '50px',
              data: {
                msgBody: 'Operazione avvenuta con successo',
                isSuccessfulModal: true,
              },
            });
          }
        });
    }
  }

  public changeReservation() {
    if (!this.isCoach) {
      this._modalServie
        .open(AddReservationModalComponent, {
          width: '300px',
          height: '370px',
          data: {
            date: new Date(),
            course: 'Funzionale',
            time: '14:00',
          },
        })
        .afterClosed()
        .subscribe((res) => {
          if (res) {
            this._modalServie.open(ConfimModalComponent, {
              width: '300px',
              height: '50px',
              data: {
                msgBody: 'Operazione avvenuta con successo',
                isSuccessfulModal: true,
              },
            });
          }
        });
    }
  }

  public generateCellId(rowIndex: number, columIndex: number) {
    return `cell_${rowIndex}_${columIndex}`;
  }
}
