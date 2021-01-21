import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FetchImages } from './store/actions/images.actions';
import * as fromApp from './store/reducers';
import { ImagesState } from './store/reducers/images.reducer';



@Injectable()
export class AppSandbox {

  imagesState$: Observable<ImagesState> = this.imagesStore.pipe(select(fromApp.getImagesState));


  constructor(private imagesStore: Store<fromApp.State>) { }

  fetchImages(pageNum = '1'): void {
    this.imagesStore.dispatch(FetchImages({pageNum}));
  }



}
