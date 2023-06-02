import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SessionStorageService } from 'angular-web-storage';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  private _menuItemCoach = [
    'home',
    'clienti',
    'prenotazioni',
    'schede',
    'esercizi',
    'nuove iscrizioni',
  ];

  private _menuItemClient = [
    'home',
    'coach',
    'abbonamenti',
    'allenamenti',
    'obbietivi',
    'prenotazioni',
  ];

  public menuItem = this._stroageService.get('isCoach')
    ? this._menuItemCoach
    : this._menuItemClient;

  @Output() navBarItemClick: EventEmitter<string> = new EventEmitter<string>();

  constructor(private _stroageService: SessionStorageService) {}

  ngOnInit(): void {}

  onItemClick(clckedItem) {
    this.navBarItemClick.emit(clckedItem);
  }
}
