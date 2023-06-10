import { GoalsMode } from '../model/gooals.model';

export const goalsList: GoalsMode[] = [
  {
    name: 'Completa scheda odierna',
    urlPic: 'assets/media/progressPicture/0.png',
    percentage: 100,
  },
  {
    name: 'Cardio check',
    urlPic: 'assets/media/progressPicture/1.png',
    percentage: 100,
  },
  {
    name: 'Compelta 10 allenamenti',
    urlPic: 'assets/media/progressPicture/2.png',
    percentage: Math.floor(Math.random() * (100 - 0 + 1) + 0),
  },
  {
    name: 'Effettua 50 piegamenti',
    urlPic: 'assets/media/progressPicture/3.png',
    percentage: Math.floor(Math.random() * (100 - 0 + 1) + 0),
  },
  {
    name: 'Fai tapis rulant per 30 minuti',
    urlPic: 'assets/media/progressPicture/4.png',
    percentage: Math.floor(Math.random() * (100 - 0 + 1) + 0),
  },
  {
    name: 'Effettua la scheda funzionale',
    urlPic: 'assets/media/progressPicture/5.png',
    percentage: Math.floor(Math.random() * (100 - 0 + 1) + 0),
  },
  {
    name: 'Completa 20 schede',
    urlPic: 'assets/media/progressPicture/6.png',
    percentage: Math.floor(Math.random() * (100 - 0 + 1) + 0),
  },
  {
    name: 'Fai 50 esercizi crunch',
    urlPic: 'assets/media/progressPicture/7.png',
    percentage: Math.floor(Math.random() * (100 - 0 + 1) + 0),
  },
];
