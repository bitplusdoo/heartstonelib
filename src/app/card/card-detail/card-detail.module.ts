import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CardDetailPage } from './card-detail.page';
import { CardService } from '../shared/card.service';
import { HttpClientModule } from '@angular/common/http';
import { LoaderService } from 'src/app/shared/service/loader.service';
import { ToastService } from 'src/app/shared/service/toast.service';
import { AlertService } from 'src/app/shared/service/alert.service';

const routes: Routes = [
  {
    path: '',
    component: CardDetailPage
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
    AlertService
  ],
  declarations: [CardDetailPage]
})
export class CardDetailPageModule {}
