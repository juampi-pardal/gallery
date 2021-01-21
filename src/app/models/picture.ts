export class Picture {
  readonly croppedPicture: string;
  readonly id: string;

  constructor(cropperPicture: string, id: string) {
    this.croppedPicture = cropperPicture;
    this.id = id;
  }
}
