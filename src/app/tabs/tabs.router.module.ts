import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'card',
        children: [
          {
            path: '',
            loadChildren: '../card/card.module#CardPageModule'
          },
          { 
            path: 'card-listing/:cardDeckGroup/:cardDeck', 
            children: [
              {
                path: '',
                loadChildren: '../card/card-listing/card-listing.module#CardListingPageModule'
              },
              { 
                path: 'card-detail/:cardId', 
                loadChildren: '../card/card-detail/card-detail.module#CardDetailPageModule' 
            }]
        }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: '../tab2/tab2.module#Tab2PageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/card',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/card',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
