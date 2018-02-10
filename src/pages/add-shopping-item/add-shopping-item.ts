import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShoppingItem } from '../../models/shoppingItem.interface';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-add-shopping-item',
  templateUrl: 'add-shopping-item.html',
})
export class AddShoppingItemPage {
  shoppingItem = {} as ShoppingItem;
  shoppingItemRef$: FirebaseListObservable<ShoppingItem[]>
  constructor(
    private navCtrl: NavController,
     private navParams: NavParams,
    private db:AngularFireDatabase,
    ) {
      this.shoppingItemRef$ = this.db.list('Shopping-List');
  }

  AddShoppingItemToFirebase(){
  this.shoppingItemRef$.push({
    itemName: this.shoppingItem.itemName,
    itemNumber: Number(this.shoppingItem.itemNumber),
  });
   this.shoppingItem = {} as ShoppingItem

   this.navCtrl.pop();
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddShoppingPage');
  }

}
