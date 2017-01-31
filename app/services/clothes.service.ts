import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Cloth } from './../models/cloth';


@Injectable()
export class ClothesService {

  private clothesUrl = 'api/clothes'; //URL to web server
  private headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http: Http) {}

  getClothes(): Promise<Cloth[]> {
    return this.http.get(this.clothesUrl)
               .toPromise()
               .then(response => response.json().data as Cloth[])
               .catch(this.handleError);
  }

  getCloth(id: number): Promise<Cloth> {
    const url = `${this.clothesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Cloth)
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
