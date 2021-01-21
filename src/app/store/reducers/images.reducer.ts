import { Action, createReducer, on } from "@ngrx/store";
import { ApiImage } from "../../models/image";
import { FetchImages, FetchImagesError, FetchImagesSuccess } from '../actions/images.actions';

export interface ImagesState {
  apiImage: ApiImage;
  isLoading: boolean;
  isError: boolean;
}

const initialState: ImagesState = {
  apiImage: undefined,
  isLoading: false,
  isError: false
}

const featureReducer = createReducer(
  initialState,
  on(FetchImages, (state, action) => (
    {
      ...state,
      isError: false,
      isLoading: true
    }
  )),
  on(FetchImagesSuccess, (state, action) => (
    {
      ...state,
      apiImage: action.apiImage,
      isLoading: false,
      isError: false
    }
  )),
  on(FetchImagesError, (state, action) => (
    {
      apiImage: null,
      isLoading: false,
      isError: true
  }))
);

export function imagesReducer(state: ImagesState | undefined, action: Action) {
  return featureReducer(state, action);
}
