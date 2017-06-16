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
  gamers: FirebaseListObservable<any[]>;
  constructor(
    private router: Router,
    private gs: GamerService
  ) { }

  ngOnInit() {
    this.gamers = this.gs.getGamers();
  }

  goToDetailPage(gamer) {
    this.router.navigate(['gamers', gamer.$key]);
  };

}
