export interface Product {
  id: number;
  price: number;
  thumbnailUrl: string;
  categories?: Array<string>
}

export interface User {
  id: number;
  name: string;
}

export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface Cart {
  user: User;
  items: Array<Photo>;
  createDate: Date;
  subTotal: number;
  total: number;
  cashDiscount: number;
}

export interface Tax {

}