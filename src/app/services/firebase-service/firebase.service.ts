import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Firestore, collectionData, collection, doc, updateDoc } from '@angular/fire/firestore';
import { Observable, Subscription, of } from 'rxjs';


export interface Players {
  id?: string;
  humanWins?: string;
  robotWins?: string;
  draw?: string;
}


/** Service for manipulating win statistics in firebase */
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  initPlayers: Players = { } as Players;
  players: Players = { } as Players;
  playersSub: Subscription;
  playersArray$: Observable<Players[]>;
  private isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  firestore: Firestore | null = null;


  constructor() {
    if (this.isBrowser) {
      this.firestore = inject(Firestore);
      const itemCollection = collection(this.firestore, 'players');
      this.playersArray$ = collectionData(itemCollection);
      this.playersSub = this.playersArray$.subscribe(players => {
        this.players = players[0];
        this.initPlayers = players[0];
      });
    } else {
      this.playersArray$ = of([]);
    }
  }


  getInitialStats() {
    return this.initPlayers;
  }

  getStats(): Observable<Players[]> {
    return this.playersArray$;
  }

  addHumanWin() {
    if (this.players.humanWins && this.firestore) {
      this.players.humanWins = (+this.players.humanWins + 1) + "";
      updateDoc(doc(this.firestore, `players/0as5g7EZpksHb74yeGBc`), { humanWins: this.players.humanWins })
    }
  }

  addRobotWin() {
    if (this.players.robotWins && this.firestore) {
      this.players.robotWins = (+this.players.robotWins + 1) + "";
      updateDoc(doc(this.firestore, `players/0as5g7EZpksHb74yeGBc`), { robotWins: this.players.robotWins });
    }
  }

  addDraw() {
    if (this.players.draw && this.firestore) {
      this.players.draw = (+this.players.draw + 1) + "";
      updateDoc(doc(this.firestore, `players/0as5g7EZpksHb74yeGBc`), { draw: this.players.draw });
    }
  }

}
