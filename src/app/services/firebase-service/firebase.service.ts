import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable, Subscription } from 'rxjs';

export interface Players {
  id?: string;
  humanWins?: number;
  robotWins?: number;
  draw?: number;
}

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  initPlayers: Players;
  players: Players;
  playersArray: Observable<Players[]>;
  playersSub: Subscription;
  playersDoc: AngularFirestoreDocument<Players>;

  constructor(public afs: AngularFirestore) {
    this.afs.collection('players').get().subscribe(res => {
      this.initPlayers = res.docs[0].data();
    });
    this.playersArray = this.afs.collection('players').valueChanges();
    this.playersSub = this.playersArray.subscribe(players => {
      this.players = players[0];
      this.initPlayers = players[0];
    });
  }

  getInitialStats() {
    if (this.initPlayers) return this.initPlayers;
  }

  getStats(): Observable<Players[]> {
    return this.playersArray;
  }

  addHumanWin() {
    this.players.humanWins += 1;
    this.playersDoc = this.afs.doc(`players/0as5g7EZpksHb74yeGBc`);
    this.playersDoc.update(this.players);
  }

  addRobotWin() {
    this.players.robotWins += 1;
    this.playersDoc = this.afs.doc(`players/0as5g7EZpksHb74yeGBc`);
    this.playersDoc.update(this.players);
  }

  addDraw() {
    this.players.draw += 1;
    this.playersDoc = this.afs.doc(`players/0as5g7EZpksHb74yeGBc`);
    this.playersDoc.update(this.players);
  }

}
