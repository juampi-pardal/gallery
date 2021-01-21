import { Injectable } from '@angular/core';
import { Subject, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class PictureService {

  actualPictureDetail$ = new Subject<any>();

  constructor(private http: HttpClient) {}

  getPictureDetail(id: string) {
    this.http.get(`http://interview.agileengine.com/images/${id}`)
    .subscribe(res => {
      this.actualPictureDetail$.next(res);
    });
  }



}
