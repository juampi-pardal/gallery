import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiImage } from '../models/image';
import { PictureService } from '../services/picture.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() apiImage: ApiImage;
  @Input() show: boolean = false;
  @Input() photoIndex: number = 0;
  @Output() closeEvent = new EventEmitter<boolean>();
  photoDetail: any;



  constructor(private pictureService: PictureService) {}

  ngOnInit(): void {
    this.pictureService.getPictureDetail(this.apiImage.pictures[this.photoIndex].id);
    this.pictureService.actualPictureDetail$.subscribe(detail => {
      this.photoDetail = detail;
    });
  }

  onClose() {
    this.closeEvent.emit(false);

  }

  onPreviousClick() {
    const previous = this.photoIndex - 1;
    this.photoIndex = previous < 0 ? this.apiImage.pictures.length - 1 : previous;
    this.pictureService.getPictureDetail(this.apiImage.pictures[this.photoIndex].id);
  }

  onNextClick() {
    const next = this.photoIndex + 1;
    this.photoIndex = next === this.apiImage.pictures.length ? 0 : next;
    this.pictureService.getPictureDetail(this.apiImage.pictures[this.photoIndex].id);
  }

}
