import { PictureResponse } from "./picture-response.interface";

export interface imagesResponse {
  hasMore: boolean;
  page: number;
  pageCount: number;
  pictures: PictureResponse[]
}
