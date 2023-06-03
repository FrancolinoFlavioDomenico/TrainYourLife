import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../../service/user-info.service';
import { ListService } from '../../service/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public page = this._listService.getPage();

  constructor(private _listService: ListService) {}

  public ngOnInit(): void {}
}
