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

  addItems(newItem) {
    return this.http.post("/api/cartitems", newItem, { responseType: "json"});
  }

  deleteItem(id) {
    return this.http.delete(`/api/cartitems/${id}`, { responseType: "json"});
  }

  updateItem(item) {
    return this.http.put(`/api/animals/${item.id}`, item, { responseType: "json"});
  }
}
