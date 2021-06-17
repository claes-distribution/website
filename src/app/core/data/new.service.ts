import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewProductsService {

  constructor(@Inject(HttpClient) private http: HttpClient) { }

  get(): Observable<IGetNewProductsResult> {
    return this.http.get<IGetNewProductsResult>(`${this.url}distribution/dashboard/new-products`);
  }

  get url() {
    return environment.api_url;
  }
}

export interface IGetNewProductsResult {
  newProducts: INewProduct[];
}

export interface INewProduct {
  id: number
  name: {
    nl: string
    fr: string
  }
  color: string
  url: string
  price: number
}
