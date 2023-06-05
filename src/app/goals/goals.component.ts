import { Component, OnInit } from '@angular/core';
import { goalsList } from '../shared/constant/gooals';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss'],
})
export class GoalsComponent implements OnInit {
  public list = goalsList;

  public ngOnInit(): void {
    this.list.forEach((item, index) => {
      item.urlPic = item.urlPic + index + '.png';
    });
  }
}
