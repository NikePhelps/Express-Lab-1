import { Component } from '@angular/core';
import { CartServiceService } from "./cart-service.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'expresslab';
  cartItems: any = [
    {
    id: 0,
    product: "shirt",
    price: 80,
    quantity: 2
    },
    {
        id: 1,
        product: "jeans",
        price: 100,
        quantity: 1
        },
];
  constructor(private cartService: CartServiceService) {
    this.cartService.getAllItems().subscribe(response => {
      this.cartItems = response;
    });

  }

  addNewAnimal(newID, newProduct, newPrice, newQuantity) {
    this.cartService.addItems(newID, newProduct, newPrice, newQuantity).subscribe(response => {
      this.cartItems = response;
    });
  }

  deleteItem(id) {
    this.cartService.deleteItem(id).subscribe(response => {
      this.cartItems = response;
    });
  }

  // updateAnAnimal(newname, oldname) {
  //   this.cartService.updateAnimal(newname, oldname).subscribe(response => {
  //     this.cartItems = response;
  //   });
  // }
}
