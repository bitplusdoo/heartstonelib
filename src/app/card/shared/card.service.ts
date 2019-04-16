import { Injectable } from '@angular/core';
import { Observable, of as ObservableOf } from 'rxjs';

@Injectable()

export class CardService {

    private readonly cardDecks: string[] = ['Druid', 'Mage', 'Warrior', 'Hunter', 'Warlock'];

    public getAllCardDecks(): Observable<string[]> {
        return ObservableOf(this.cardDecks);
    }

}
