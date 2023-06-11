import { Component, Input, OnInit } from '@angular/core';
import { NavigationService } from '../../service/navigation.service';

@Component({
  selector: 'app-title-page-bar',
  templateUrl: './title-page-bar.component.html',
  styleUrls: ['./title-page-bar.component.scss'],
})
export class TitlePageBarComponent implements OnInit {
  @Input() titlePage: string;
  @Input() subTitle: string;

  constructor(private _navigationService: NavigationService) {}

  public ngOnInit(): void {}

  public onBackClick() {
    this._navigationService.getPreviuousPage();
  }
}
