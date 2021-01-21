import { ApiImage } from "../models/image";
import { Picture } from "../models/picture";
import { imagesResponse } from "../responses/images.interface";
import { PictureResponse } from "../responses/picture-response.interface";

export class ImagesDeserializer {

  static deserializeImages(response: imagesResponse): ApiImage {
    return new ApiImage(response.hasMore, response.page, response.pageCount, ImagesDeserializer.deserializePictures(response.pictures));
  }

  static deserializePictures(response: PictureResponse[]): Picture[] {
    return response.map(pict => new Picture(pict.cropped_picture, pict.id));
  }

}
