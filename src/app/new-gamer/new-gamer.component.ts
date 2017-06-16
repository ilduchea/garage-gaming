import { Component, OnInit } from '@angular/core';
import { Gamer } from '../gamer.model';
import { GamerService } from '../gamer.service'

@Component({
  selector: 'app-new-gamer',
  templateUrl: './new-gamer.component.html',
  styleUrls: ['./new-gamer.component.css'],
  providers: [GamerService]
})
export class NewGamerComponent implements OnInit {
  gameTypes: string[] = [''];
  itemArrayOptionsGameTypes: [string, boolean] = ['Game Type', true];

  constructor(
    private gs: GamerService
  ) { }

  ngOnInit() {
  }

  createGamer(
    name: string,
    age: number,
    availablity: string,
    gameTypes: string[]
  ) {
    let newGamer: Gamer = new Gamer(
      name,
      age,
      availablity,
      this.gameTypes
    );
    this.gameTypes = [''];
    this.gs.addGamer(newGamer);
  }

  gamerTypesUpdate(gameTypes: string[]) {
    this.gameTypes = gameTypes;
  }

}
