import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photos } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) {
  }

  public async getData(): Promise<Photos> {
    return await this.http.get<Photos>('https://jsonplaceholder.typicode.com/todos/1').toPromise();
  }
}
