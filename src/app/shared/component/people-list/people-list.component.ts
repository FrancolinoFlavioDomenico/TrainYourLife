import { Component, OnInit } from '@angular/core';
import { ClientModel } from '../../model/client.model';
import { CoachModel } from '../../model/coach.model';
import { UserInfoService } from '../../service/user-info.service';
import { clientList, coachList } from '../../constants/peopleList';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss'],
})
export class PeopleListComponent implements OnInit {
  public isCoach = this._userInfoService.getIsCoach();
  public peopleList: ClientModel[] | CoachModel[] = this.isCoach
    ? clientList
    : coachList;

  constructor(private _userInfoService: UserInfoService) {}

  public ngOnInit(): void {}

  public getOfferedList(coachId: Number): string[] {
    const coach = coachList.find((item) => item.id === coachId);
    if (!this.isCoach) return coach.offeredCourse;

    return [];
  }
}
