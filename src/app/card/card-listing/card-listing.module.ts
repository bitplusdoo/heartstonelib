import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { CardListingPage } from './card-listing.page';
import { CardService } from '../shared/card.service';
import { LoaderService } from 'src/app/shared/service/loader.service';
import { ToastService } from 'src/app/shared/service/toast.service';
import { SearchComponent } from 'src/app/shared/component/search/search.component';
import { FavoriteCardStore } from '../shared/card-favorite.store';

const routes: Routes = [
  {
    path: '',
    component: CardListingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    CardService,
    LoaderService,
    ToastService,
    FavoriteCardStore
  ],
  declarations: [
    CardListingPage,
    SearchComponent
  ]
})
export class CardListingPageModule {}
