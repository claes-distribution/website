import { HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { SafeUrl } from '@angular/platform-browser';

export class ApiService {

  constructor(@Inject(HttpClient) private http: HttpClient) {
  }

  getNewsList(company: string, items?: number | null): Observable<NewsItem[]> {
    if (items) {

    }
    return this.http.get<NewsItem[]>(`${this.url}news?company=${company}&numItems=${items}`);
  }

  getCategories(list: CategoryList = 'all', id?: number): Observable<Category[]> {
    switch (list) {
      case 'top':
        return this.http.get<Category[]>(`${this.url}distribution/webshop/data/productcategories/top`);

      case 'all':
        if (id) {
          return this.http.get<Category[]>(`${this.url}distribution/webshop/data/productcategories?parentId=${id}`);
        } else {
          return this.http.get<Category[]>(`${this.url}distribution/webshop/data/productcategories`);
        }
    }
  }

  getCategoryDetail(id: number): Observable<Category> {
    return this.http.get<Category>(`${this.url}distribution/webshop/data/productcategories/${id}/detail`);
  }

  getPcmImagesList(id: number): Observable<PcmImagesList> {
    return this.http.get<PcmImagesList>(`${this.pcm_url}content/image-list/dis/website/category-image/${id}`);
  }

  sendContactQuestion(question: ContactQuestion): Observable<string> {
    return this.http.post<string>(`${this.url}ContactEmail`, question);
  }

  get pcm_url() {
    return environment.pcm_url;
  }

  get url() {
    return environment.api_url;
  }
}

export type CategoryList = 'top' | 'all';

export interface NewsItem {
  id: number;
  titleNL: string;
  titleFR: string;
  date: Date;
  summaryNL: string;
  summaryFR: string;
  banner: string;
  company: string;
}

export interface SecondhandAppliance {
  ItemNum: string;
  ItemDescNl: string;
  ItemDescFr: string;
  Imagedata: string;
  Stock: number;
  OrderFound: boolean;
  Price: string;
  SalItem: string;
  Company: string;
}

export interface PcmImagesList {
  images: {
    name: string;
    guid: string;
  }[];
}

export interface Category {
  Id: number;
  GroupId: number;
  Name: CultureEntry;
  Description?: CultureEntry;
  Categories?: Category[];
  url?: SafeUrl;
  images?: string[];
}

export interface CultureEntry {
  nl: string;
  fr: string;
}

export interface ContactQuestion {
  Email: string;
  Company: string;
  Department: string;
  Subject: string;
  Question: string;
}
