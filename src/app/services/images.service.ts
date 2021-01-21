import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private http: HttpClient) {}

  getImages(pageNum = '1'): Observable<any> {
    return this.http.get('http://interview.agileengine.com/images?page=' + pageNum );
  }
}
