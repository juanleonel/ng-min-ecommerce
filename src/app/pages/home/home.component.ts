import { Component, OnInit } from '@angular/core';
import { Photo, Cart } from 'src/app/interfaces';
import { Tile } from '../../interfaces/Tile';
import { ProductService } from '../../services/product.service';
import { HomeLabels, IHomeLabels } from './home.component.labels';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public labels: IHomeLabels;
  public photos: Array<Photo>;
  public cart: Cart;
  public total: number;
  public subTotal: number;
  constructor(private _productService: ProductService) {
    this.labels = HomeLabels;
    this.cart = {} as Cart;
    this.cart.items = [];
  }

  public async ngOnInit(): Promise<void> {
    this.photos = await this._productService.getPhotos();
  }

  public async viewElement(row: Photo): Promise<void> {
    try {
      const photo = await this._productService.getPhopto(row.id);
      if (photo) {
        console.log(photo);
      }
    } catch (error) {
    }
  }



  public async addElement(row: Photo): Promise<void> {
    if (!row) { return; }
    if (!this.cart.items.find(item => item.id == row.id)) {
      this.cart.items.push(row);
      console.log(this.cart.items.length);
    };
  }
}
