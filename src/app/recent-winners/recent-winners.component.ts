import { Component, OnInit } from '@angular/core';
import { WinnersService } from '../services/winners.service';
import { Winners } from '../services/winners.model';

@Component({
  selector: 'app-recent-winners',
  templateUrl: './recent-winners.component.html',
  styleUrls: ['./recent-winners.component.scss']
})
export class RecentWinnersComponent implements OnInit {

  recentWinners: Winners[];

  constructor(private winnersService: WinnersService) { }

  ngOnInit(): void {
    this.winnersService.getRecentWinners()
      .subscribe(
        recentWinners => this.recentWinners = recentWinners
      );
  }

}
