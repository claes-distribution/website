import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(@Inject(HttpClient) private http: HttpClient) { }

  get(): Observable<IGetCategoriesResult> {
    return this.http.get<IGetCategoriesResult>(`${this.url}distribution/categories`);
  }

  getChildren(parentId: number): Observable<IGetCategoriesResult> {
    return this.http.get<IGetCategoriesResult>(`${this.url}distribution/categories?parent=${parentId}`);
  }

  get url() {
    return environment.api_url;
  }
}

export interface IGetCategoriesResult {
  categories: ICategory[];
}

export interface ICategory {
  id: number;
  name: {
    nl: string;
    fr: string;
  };
  description: {
    nl: string;
    fr: string;
  };
}
