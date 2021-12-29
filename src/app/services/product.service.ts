import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo } from '../interfaces/index';

@Injectable({
    providedIn: 'root',
})
export class ProductService {

 constructor(private http: HttpClient) {
 }

 public async getPhotos(): Promise<Array<Photo>> {
   return await this.http.get<Array<Photo>>('https://jsonplaceholder.typicode.com/photos').toPromise();
 }

 public async getPhopto(id: number): Promise<Photo> {
  return await this.http.get<Photo>('https://jsonplaceholder.typicode.com/photos/'+ id).toPromise();
}
}