import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FetchImages } from './store/actions/images.actions';
import * as fromApp from './store/reducers';
import { AppSandbox } from './app.sandbox';
import { ApiImage } from './models/image';
import { Picture } from './models/picture';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private imagesStore: Store<fromApp.State>, public appSandbox: AppSandbox) {}

  imagesState = this.appSandbox.imagesState$;
  apiImage: ApiImage;
  showModal: boolean = false;
  photoIndex = 0;


  ngOnInit() {
    this.appSandbox.fetchImages();
    this.imagesState.subscribe(state => {
      this.apiImage = state.apiImage;
    });
  }

  buildPagesArray(): Array<number> {
    return [...Array(this.apiImage.pageCount).keys()];
  }

  clickPage(pageNum) {
    if (pageNum != this.apiImage.page) {
      this.appSandbox.fetchImages(pageNum);
    }
  }

  openModal(index) {
    this.photoIndex = index;
    this.showModal = true;
  }

  closeEvent() {
    this.showModal = false;
  }

}
