import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Winners } from './winners.model';

@Injectable({
  providedIn: 'root'
})
export class WinnersService {

  recentWinners = new BehaviorSubject<Winners[]>([]);

  getRecentWinners(): any {
    return this.recentWinners
  }

  setRecentWinners(winner: Winners): any {
    this.recentWinners.next(this.recentWinners.getValue().concat([winner]))
  }

  constructor() { }
}
