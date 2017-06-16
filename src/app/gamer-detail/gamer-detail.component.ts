import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Gamer } from '../gamer.model';
import { GamerService } from '../gamer.service';

@Component({
  selector: 'app-gamer-detail',
  templateUrl: './gamer-detail.component.html',
  styleUrls: ['./gamer-detail.component.css'],
  providers: [GamerService]
})
export class GamerDetailComponent implements OnInit {
  @Input() adminGamerId: string;
  gamerId: string;
  gamerDetails;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private gs: GamerService
  ) {}

  ngOnInit() {
    if (this.router.url === '/admin') {
      this.gamerId = this.adminGamerId;
    } else {
      this.route.params.forEach((urlParameters) => {
        this.gamerId = urlParameters['id'];
      });
    }

    this.gamerDetails = this.gs.getGamerById(this.gamerId);
  }
}
