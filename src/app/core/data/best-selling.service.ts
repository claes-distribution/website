import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BestSellingService {

  constructor(@Inject(HttpClient) private http: HttpClient) { }

  get(): Observable<IGetBestSellingProductsResult> {
    return this.http.get<IGetBestSellingProductsResult>(`${this.url}distribution/dashboard/best-selling-products`);
  }

  get url() {
    return environment.api_url;
  }
}

export interface IGetBestSellingProductsResult {
  bestSellingProducts: IBestSellingProduct[];
}

export interface IBestSellingProduct {
  id: number;
  name: {
    nl: string;
    fr: string;
  };
  url: string;
  price: number;
}
