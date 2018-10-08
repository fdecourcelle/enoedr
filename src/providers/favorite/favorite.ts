import { Http } from "@angular/http";
import { Injectable, OnInit } from "@angular/core";
import { Dish } from "../../shared/dish";
import { Observable } from "rxjs/Observable";
import { DishProvider } from "../dish/dish";
import { Storage } from "@ionic/storage";
import { IfObservable } from "rxjs/observable/IfObservable";
/*
  Generated class for the FavoriteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FavoriteProvider {
   favorites : Array<any>;

  constructor(
    private dishservice: DishProvider,
    http: Http,
    private storage: Storage
    
  ) {
    this.favorites = [];
    this.storage.get("favorites").then(favorites => {
      if (favorites) {
        console.log(favorites);
        this.favorites = favorites;
      } else console.log("favorites not defined");
    });
  }
  ngOnInit() {
    // this.getFavorites();
  }

  

  addFavorite(id: number): boolean {
    if (!this.isFavorite(id)) this.favorites.push(id);
    this.storage.set("favorites", this.favorites);
    return true;
  }
  getFavorites(): Observable<Dish[]> {
    return this.dishservice
      .getDishes()
      .map(dishes =>
        dishes.filter(dish => this.favorites.some(el => el === dish.id))
      );
  }

  deleteFavorite(id: number): Observable<Dish[]> {
    let index = this.favorites.indexOf(id);
    if (index >= 0) {
      this.favorites.splice(index, 1);
      this.storage.set("favorites", this.favorites);
      return this.getFavorites();
    } else {
      console.log("Deleting non-existant favorite", id);
      return Observable.throw("Deleting non-existant favorite" + id);
    }
  }

  isFavorite(id: number): boolean {
    return this.favorites.some(el => el === id);
  }
}
