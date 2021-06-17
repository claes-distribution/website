import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotlightProductsService {

  constructor(@Inject(HttpClient) private http: HttpClient) { }

  get(): Observable<IGetSpotlightProductsResult> {
    return this.http.get<IGetSpotlightProductsResult>(`${this.url}distribution/dashboard/spotlight-products`);
  }

  get url() {
    return environment.api_url;
  }
}

export interface IGetSpotlightProductsResult {
  spotlightProducts: ISpotlightProduct[];
}

export interface ISpotlightProduct {
  id: number
  name: {
    nl: string
    fr: string
  }
  color: string
  url: string
  price: number
}
