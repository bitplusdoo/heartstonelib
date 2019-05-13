import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Subscription } from 'rxjs';

import { LoaderService } from 'src/app/shared/service/loader.service';
import { ToastService } from 'src/app/shared/service/toast.service';
import { CardService } from '../shared/card.service';
import { Card } from '../shared/card.model';
import { FavoriteCardStore } from '../shared/card-favorite.store';


@Component({
  selector: 'app-card-listing',
  templateUrl: './card-listing.page.html',
  styleUrls: ['./card-listing.page.scss'],
})
export class CardListingPage {

  public cardDeckGroup: string;
  public cardDeck: string;
  public cards: Card[] = [];
  public copyOfCards: Card[] = [];
  public isLoading = false;
  public favoriteCards: any = [];
  public favoriteCardSub: Subscription;

  public i: number;

  constructor(private route: ActivatedRoute, 
              private cardService: CardService,
              private navCtrl: NavController,
              private loaderService: LoaderService,
              private toastService: ToastService,
              private storage: Storage,
              private favoriteCardStore: FavoriteCardStore) { 

        this.favoriteCardSub = this.favoriteCardStore.favoriteCards.subscribe(
          (favoriteCards: any) => {
            this.favoriteCards = favoriteCards;
        });
 }

 ionViewDidLeave() {
  if (this.favoriteCardSub && this.favoriteCardSub.closed) {
    this.favoriteCardSub.unsubscribe();
  }
 }

  private getCards() {
    this.loaderService.presentLoading();
    
    this.cardService.getCardsByDeck(this.cardDeckGroup, this.cardDeck).subscribe(
      (cards: Card[]) => {
        this.cards = cards;
        for ( this.i = 0; this.i < this.cards.length; this.i++) {
          this.cards[this.i].favorite = this.isCardFavorite(this.cards[this.i].cardId);
        }
        this.copyOfCards = Array.from(this.cards);
        this.loaderService.dismissLoading();
      }, () => {
        this.loaderService.dismissLoading();
        this.toastService.presentErrorToast('Ups! Server error, cards could not be loaded, try to refresh your page!');
      }
    );
  }

  private isCardFavorite(cardId: string): boolean {
    const card = this.favoriteCards[cardId];

    return card ? true : false;
  }
  
  ionViewWillEnter() {
    this.cardDeckGroup = this.route.snapshot.paramMap.get('cardDeckGroup');
    this.cardDeck = this.route.snapshot.paramMap.get('cardDeck');

    if (this.cards && this.cards.length === 0) { 
      this.getCards(); 
    }
  }

  seeDetails(cardId: string) {
    this.navCtrl.navigateForward(`tabs/card/card-listing/:cardDeckGroup/:cardDeck/card-detail/${cardId}`);
  }

  doRefresh(event) {
    this.getCards();
    event.target.complete();
  }

  hydrateCards(cards: Card[]) {
    this.cards = cards;
    this.isLoading = false;
  }

  handleSearchStart() {
    this.isLoading = true;
  }

  favoriteCard(card: Card) {
    this.favoriteCardStore.toggleCards(card);
  }

}
