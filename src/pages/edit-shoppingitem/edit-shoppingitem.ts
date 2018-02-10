import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import  {AngularFireDatabase, FirebaseObjectObservable} from 'angularfire2/database'
import { ShoppingItem } from '../../models/shoppingItem.interface';

@IonicPage()
@Component({
  selector: 'page-edit-shoppingitem',
  templateUrl: 'edit-shoppingitem.html',
})
export class EditShoppingitemPage {
   shoppingItemRef$:FirebaseObjectObservable<ShoppingItem>;
   shoppingItem = {} as ShoppingItem;
   constructor(
    private navCtrl: NavController,
     private navParams: NavParams,
     private db:AngularFireDatabase
    ) {
      const shoppingItemId = this.navParams.get('shoppingItemId');

      this.shoppingItemRef$ = this.db.object(`Shopping-List/${shoppingItemId}`);
      this.shoppingItemRef$.subscribe(
        shoppingItem => this.shoppingItem = shoppingItem
      );
  }
  updateShoppingItem(shoppingitem:ShoppingItem){
   this.shoppingItemRef$.update(shoppingitem);

   this.navCtrl.pop();
  }

}
