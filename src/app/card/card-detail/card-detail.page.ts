import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { CardService } from '../shared/card.service';
import { Card } from '../shared/card.model';
import { LoaderService } from '../../shared/service/loader.service';
import { AlertService } from 'src/app/shared/service/alert.service';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.page.html',
  styleUrls: ['./card-detail.page.scss'],
})
export class CardDetailPage {

  public cardId: string;
  public singleCard: Card;

  constructor(private route: ActivatedRoute, 
              private cardService: CardService,
              private loaderService: LoaderService,
              private alertService: AlertService) { }



  async ionViewWillEnter() {
    this.cardId = this.route.snapshot.paramMap.get('cardId');

    this.loaderService.presentLoading();

    this.cardService.getSingleCard(this.cardId).subscribe(
      (singleCard: Card[]) => {
        // tslint:disable-next-line:no-shadowed-variable
        this.singleCard = singleCard.map((singleCard: Card) => {
          singleCard.text = singleCard.text ? singleCard.text.replace(new RegExp('\\\\n', 'g'), ' ') : 'No description';

          return singleCard;
        })[0];
        if (singleCard) {
          this.alertService.presentAlert('The card is successfully displayed');
        }
        this.loaderService.dismissLoading();
      }
    );
  }

  updateImage() {
    this.singleCard.img = 'assets/images/DefaultCard.png';
  }

}
