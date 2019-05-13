import { Injectable } from '@angular/core';
import { Observable, of as ObservableOf } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { CardDeck, Card } from './card.model';

@Injectable()

export class CardService {

    private readonly API_KEY = 'eeee7ab98amsh98be273e9e5cb60p17cddbjsn8c7c0e9b2902';
    private readonly HS_API_URL = 'https://omgvamp-hearthstone-v1.p.rapidapi.com';

    private headers: HttpHeaders;

    constructor(private http: HttpClient) {
        this.headers = new HttpHeaders({'X-RapidAPI-Key': this.API_KEY});
    }

    public getAllCardDecks(): Observable<CardDeck[]> {
        return this.http.get<CardDeck[]>(`${this.HS_API_URL}/info`, {headers: this.headers});
    }

    public getCardsByDeck(cardDeckGroup: string, cardDeck: string): Observable<Card[]> {
        return this.http.get<Card[]>(`${this.HS_API_URL}/cards/${cardDeckGroup}/${cardDeck}`, {headers: this.headers});
    }

    public getSingleCard(cardId: string): Observable<Card[]> {
        return this.http.get<Card[]>(`${this.HS_API_URL}/cards/${cardId}`, {headers: this.headers});
    }

}
