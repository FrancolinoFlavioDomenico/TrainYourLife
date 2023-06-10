import { AfterViewInit, Component, OnInit } from '@angular/core';
import { goalsList } from '../shared/constant/gooals';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss'],
  animations: [],
})
export class GoalsComponent implements OnInit, AfterViewInit {
  public list = goalsList;

  checkAperto = false;
  lbl = 'Chiuso';

  public ngOnInit(): void {}

  public ngAfterViewInit(): void {
    let progressBarAdvancement = document.getElementsByClassName(
      'progress-bar-advancement'
    );
    for (let i in progressBarAdvancement) {
      progressBarAdvancement[i].animate(
        [{ width: 0 }, { width: this.list[i].percentage }],
        500
      );
    }
  }
}
