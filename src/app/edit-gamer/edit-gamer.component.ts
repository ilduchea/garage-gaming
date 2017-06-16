import { Component, OnInit, Input } from '@angular/core';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Gamer } from '../gamer.model';
import { GamerService } from '../gamer.service';

@Component({
  selector: 'app-edit-gamer',
  templateUrl: './edit-gamer.component.html',
  styleUrls: ['./edit-gamer.component.css'],
  providers: [GamerService]
})
export class EditGamerComponent implements OnInit {
  @Input() adminGamer;
  itemArrayOptionsGameTypes: [string, boolean] = ['Game Type', false];
  constructor(
    private gs: GamerService
  ) { }

  ngOnInit() {
  }

  updateGamer(gamer) {
    this.gs.updateGamer(gamer);
  }

}
