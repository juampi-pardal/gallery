import { createAction, props } from '@ngrx/store';
import { ApiImage } from '../../models/image';

export const FetchImages = createAction(
  '[IMAGES] FETCH',
   props<{pageNum?: string}>()
);

export const FetchImagesSuccess = createAction(
  '[IMAGES] SUCCESS',
  props<{apiImage: ApiImage}>()
);

export const FetchImagesError = createAction(
  '[IMAGES] ERROR'
);
