import { Component, OnInit } from '@angular/core';
import { MediaItemService } from '../services/media-item.service';

@Component({
  selector: 'app-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.css']
})
export class MediaItemListComponent implements OnInit {
  medium = '';
  mediaItems;
    
  constructor(private mediaItemService: MediaItemService) {
    
  }
  
  ngOnInit() {
    this.getMediaItems(this.medium);
  }
  
  getMediaItems(medium) {
  this.medium = medium;
  this.mediaItems = this.mediaItemService.get(medium)
      .subscribe(mediaItems => {
        this.mediaItems = mediaItems;
      });
  }
  
  onMediaItemDelete(mediaItem) {
    this.mediaItemService.delete(mediaItem);
  };

}
