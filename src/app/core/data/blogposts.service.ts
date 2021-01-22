import { Injectable, Inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogpostsService {

  constructor(@Inject(HttpClient) private http: HttpClient) { }

  get(items: number = 10, page: number = 0): Observable<IGetBlogsResponse> {
    return this.http.get<IGetBlogsResponse>(`https://liva.groupclaes.be/blogs/list?company=dis&items=${items}&page=${page}&filter=true`);
  }

  get url() {
    return environment.api_url;
  }
}

export interface IGetBlogsResponse {
  blogposts: IBlogPreview[];
}

export interface IBlogPreview {
  id: number;
  title: {
    nl: string;
    fr: string;
  };
  description: {
    nl: string;
    fr: string;
  };
  ctaText: {
    nl: string;
    fr: string;
  };
  company: string;
  image: string;
  ctaHref: string;
  icon: string;
}
