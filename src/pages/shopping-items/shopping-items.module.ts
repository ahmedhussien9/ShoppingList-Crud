import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShoppingItemsPage } from './shopping-items';

@NgModule({
  declarations: [
    ShoppingItemsPage,
  ],
  imports: [
    IonicPageModule.forChild(ShoppingItemsPage),
  ],
})
export class ShoppingItemsPageModule {}
