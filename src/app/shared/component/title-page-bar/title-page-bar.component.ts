import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-page-bar',
  templateUrl: './title-page-bar.component.html',
  styleUrls: ['./title-page-bar.component.scss'],
})
export class TitlePageBarComponent implements OnInit {
  @Input() titlePage: string;
  @Input() subTitle: string;

  public ngOnInit(): void {}
}
