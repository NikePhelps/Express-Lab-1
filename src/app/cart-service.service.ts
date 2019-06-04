import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  constructor(private http: HttpClient) { }

  getAllItems() {
    return this.http.get("/api/cartitems", { responseType: "json"});
  }

  addItems(newID, newProduct, newPrice, newQuantity) {
    return this.http.post("/api/cartitems", { id: newID, product: newProduct, 
      price: newPrice, quantity: newQuantity }, { responseType: "json"});
  }

  deleteItem(id) {
    return this.http.delete(`/api/animals/${id}`, { responseType: "json"});
  }

  // updateAnimal(newname, oldname) {
  //   return this.http.put(`/api/animals/${oldname}`, { name: newname }, { responseType: "json"});
  // }
}
