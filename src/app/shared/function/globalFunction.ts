import { clientList, coachList } from '../constant/peopleList';
import { course, cards, exercises } from '../constant/gymList';
import { subscriptionList } from '../constant/subscriptionList';
import { ListPageModel } from '../model/list.model';

export function getPath(voice: string): string {
  return '/' + voice;
}

export function mapListPageFromHome(pageToMap: string): ListPageModel {
  let pageToSet: ListPageModel;
  switch (pageToMap) {
    case 'clienti':
      pageToSet = {
        title: 'Seleziona cliente',
        list: clientList.map((item) => {
          return {
            title: `${item.name} ${item.surname}`,
            itemId: item.id,
            fromList: 'client',
            isWhitCheckBox: false,
            urlToRedirect: `${item.id}`,
          };
        }),
      };
      break;
    case 'coach':
      pageToSet = {
        title: 'Seleziona coach',
        list: coachList.map((item) => {
          return {
            title: `${item.name} ${item.surname}`,
            itemId: item.id,
            fromList: 'coach',
            isWhitCheckBox: false,
            subTitle: `Corsi offerti: ${item.offeredCourse}`,
            urlToRedirect: `${item.id}`,
          };
        }),
      };
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
            urlToRedirect: 'calendario',
          };
        }),
      };
      break;
    case 'schede':
      pageToSet = {
        title: 'Seleziona scheda:',
        list: cards.map((item) => {
          return {
            title: item.name,
            itemId: item.id,
            fromList: 'cards',
            isWhitCheckBox: false,
            urlToRedirect: item.id,
          };
        }),
      };
      break;
    case 'esercizi':
      pageToSet = {
        title: 'Seleziona esericizio:',
        list: exercises.map((item) => {
          return {
            title: item.name,
            itemId: item.id,
            fromList: 'exercises',
            isWhitCheckBox: false,
            urlToRedirect: item.id,
          };
        }),
      };
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
            urlToRedirect: item.id,
          };
        }),
      };
      break;
  }
  return pageToSet;
}

export function mapListPageFromUserDetail(pageToMap: string): ListPageModel {
  let pageToSet: ListPageModel;
  switch (pageToMap) {
    case 'schede':
      pageToSet = {
        title: 'Seleziona scheda:',
        list: cards.map((item) => {
          return {
            title: item.name,
            itemId: item.id,
            fromList: 'cards',
            isWhitCheckBox: true,
          };
        }),
      };
      break;
  }
  return pageToSet;
}
