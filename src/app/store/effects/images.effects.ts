import { Injectable } from '@angular/core';
import { switchMap, tap, map, catchError } from 'rxjs/operators'
import { Action } from '@ngrx/store';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import * as fromApp from '../../store/reducers';
import { select, Store } from '@ngrx/store';
import { FetchImages, FetchImagesSuccess } from '../actions/images.actions';
import { Observable } from 'rxjs';
import { ImagesService } from '../../services/images.service';
import { imagesResponse } from '../../responses/images.interface';
import { ImagesDeserializer } from '../../deserializers/images.deserializer';



@Injectable()
export class ImagesEffects {

  constructor(private actions$: Actions, private imagesService: ImagesService, private imagesStore: Store<fromApp.State>
    ) { }

  fetchProfile$: Observable<Action> = createEffect(
    () => this.actions$.pipe(
      ofType(FetchImages),
      tap(action =>
          this.imagesService.getImages(action.pageNum)
          .subscribe((res: imagesResponse) => {

            this.imagesStore.dispatch(FetchImagesSuccess({apiImage: ImagesDeserializer.deserializeImages(res)}));
            // const user = new User(res.user._id, undefined, res.user.email, undefined, res.user.phone, res.user.country, res.user.fullName, this.createFriends(res.user.friends))
            // this.userProfileStore.dispatch(FetchUserProfileSuccess({user}))
          })
        )
    ), {dispatch: false}
  );

}

