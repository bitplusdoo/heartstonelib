import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { CardDeckPage } from './card-deck/card-deck.page';
import { CardService } from './shared/card.service';
import { CardListComponent } from './components/card-list.component';
import { LoaderService } from '../shared/service/loader.service';
import { ToastService } from '../shared/service/toast.service';

@NgModule({
    imports: [
        IonicModule,
        HttpClientModule,
        CommonModule,
        RouterModule.forChild([{ path: '', component: CardDeckPage }])
    ],
    providers: [
        CardService,
        LoaderService,
        ToastService
    ],
    declarations: [
        CardDeckPage,
        CardListComponent
    ]
})

export class CardPageModule {}
