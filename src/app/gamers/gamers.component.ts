import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { Gamer } from '../gamer.model';
import { GamerService } from '../gamer.service';

@Component({
  selector: 'app-gamers',
  templateUrl: './gamers.component.html',
  styleUrls: ['./gamers.component.css'],
  providers: [GamerService]
})
export class GamersComponent implements OnInit {
  gamers;
  currentRoute: string = this.router.url;
  filterByOption: string = 'all';

  constructor(
    private router: Router,
    private gs: GamerService
  ) { }

  ngOnInit() {
    this.gs.getGamers().subscribe(gamers => {
      this.gamers = gamers;
    });
  }

  goToDetailPage(gamer) {
    this.router.navigate(['gamers', gamer.$key]);
  };

  filterSelector(filterOption: string) {
    this.filterByOption = filterOption;
  }

}
