import { ImagesState, imagesReducer } from './images.reducer';
import { ActionReducerMap, createSelector} from "@ngrx/store";


export interface State {
  apiImage: ImagesState;
}

export const reducers: ActionReducerMap<State> = {
  apiImage: imagesReducer
}


export const getEntities = (state: State) => state;

export const getImagesState = createSelector(
  getEntities,
  (state: State) => state.apiImage
);
