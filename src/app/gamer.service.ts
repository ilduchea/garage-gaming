import { Injectable } from '@angular/core';
import { Gamer } from './gamer.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()

export class GamerService {
  gamers: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.gamers = db.list('gamers');
  }

  getGamers() {
    return this.gamers;
  }

  addGamer(newGamer: Gamer) {
    this.gamers.push(newGamer);
  }

  getGamerById(gamerId: string){
    return this.db.object('gamers/' + gamerId);
  }

  updateGamer(localUpdatedGamer){
    let gamerEntryInFirebase = this.getGamerById(localUpdatedGamer.$key);
    gamerEntryInFirebase.update({
      name: localUpdatedGamer.name,
      age: localUpdatedGamer.age,
      availability: localUpdatedGamer.availability,
      gameTypes: localUpdatedGamer.gameTypes
    });
  }

  deleteGamer(localGamerToDelete){
    let gamerEntryInFirebase = this.getGamerById(localGamerToDelete.$key);
    gamerEntryInFirebase.remove();
  }
}
