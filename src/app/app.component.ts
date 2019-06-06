import { Component } from '@angular/core';
import { CartServiceService } from "./cart-service.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'expresslab';
  cartItems: any 
  shouldBeHidden: boolean = true;
    
  
  constructor(private cartService: CartServiceService) {
    this.cartService.getAllItems().subscribe(response => {
      this.cartItems = response;
    });

  }
  toggleForm(index) {
    this.cartItems[index].beingUpdated = !this.cartItems[index].beingUpdated;
    console.log(this.cartItems[index]);
    this.shouldBeHidden = !this.shouldBeHidden;
  }

  addNewItem(form) {
    this.cartService
      .addItems({
        ...form.value})
      .subscribe(response => {
        this.cartItems = response;
      });
  }

  deleteAnItem(id) {
    this.cartService.deleteItem(id).subscribe(response => {
      this.cartItems = response;
    });
  }

  updateAnItem(item) {
    this.cartService.updateItem(item).subscribe(response => {
      this.cartItems = response;
    });
  }
}
