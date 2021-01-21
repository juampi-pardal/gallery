import {Picture} from './picture';

export class ApiImage {
  readonly hasMore: boolean;
  readonly page: number;
  readonly pageCount: number;
  readonly pictures: Picture[];

  constructor(hasMore: boolean, page: number, pageCount: number, pictures: Picture[]) {
    this.hasMore = hasMore;
    this.page = page;
    this.pageCount = pageCount;
    this.pictures = pictures;
  }

}
