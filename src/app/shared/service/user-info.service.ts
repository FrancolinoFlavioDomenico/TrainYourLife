import { Injectable } from '@angular/core';
import { SessionStorageService } from 'angular-web-storage';
import { Subject } from 'rxjs';

@Injectable()
export class UserInfoService {
  private _isLogged = new Subject<boolean>();
  private _isCoach = new Subject<boolean>();

  public isLoggedChangeEvent$ = this._isLogged.asObservable();
  public isCoachChangeEvent$ = this._isCoach.asObservable();

  constructor(private _stroageService: SessionStorageService) {}

  public setStorageServiceValue(key: string, value: boolean | string): void {
    this._stroageService.set(key, value);

    if (key === 'isLogged') this._isLogged.next(value as boolean);

    if (key === 'isCoach') this._isCoach.next(value as boolean);
  }

  public getIsCoach(): boolean {
    return this._stroageService.get('isCoach') as boolean;
  }

  public getIsLogged(): boolean {
    return this._stroageService.get('isLogged') as boolean;
  }
}
