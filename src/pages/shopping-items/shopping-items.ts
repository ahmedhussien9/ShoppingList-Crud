import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams , ActionSheetController} from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase }from 'angularfire2/database'
import { ShoppingItem } from '../../models/shoppingItem.interface';

@IonicPage()
@Component({
  selector: 'page-shopping-items',
  templateUrl: 'shopping-items.html',
})
@Injectable()
export class ShoppingItemsPage {
  ShoppingListRef$:FirebaseListObservable<ShoppingItem[]>;

  constructor(
     private navCtrl: NavController,
     private navParams: NavParams,
     private db:AngularFireDatabase,
     public ActionSheetCtrl:ActionSheetController
    ) {

      this.ShoppingListRef$ = db.list('Shopping-List');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShoppingItemsPage');
  }
  nagivateToAddShoppingItem(){
    this.navCtrl.push("AddShoppingItemPage")
  }
  ManageItem(item:ShoppingItem) {
    this.ActionSheetCtrl.create({
      title : item.itemName,
      buttons: [{
        text:"Edit",
        handler: ()=> {
          this.navCtrl.push("EditShoppingitemPage",
            { shoppingItemId: item.$key}
      )}
      },
      {
        text: "Delete",
        role:"destructive",
        handler:()=> {
          this.ShoppingListRef$.remove(item.$key);
        }
      },
      {
        text:"Canel",
        role: "Cancel",
        handler: ()=> {
          // the cancel functionality will goes here 
          console.log('the user cancel the transiction');
        }
      },
      ]
    }).present()
  }
}
