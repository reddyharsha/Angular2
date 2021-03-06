import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MediaItemService {

  mediaItems = [
    {
    id: 1,
    name: 'Firebug',
    medium: 'Series',
    category: 'Science Fiction',
    year: '2010',
    watchedOn: '12/10/2016',
    isFavorite: false
  }, {
    id: 2,
    name: 'Bahubali',
    medium: 'Movie',
    category: 'Thriller',
    year: '2014',
    watchedOn: '11/10/2015',
    isFavorite: true
  },  {
    id: 3,
    name: 'The walking dead',
    medium: 'Series',
    category: 'Zombie Horror',
    year: '2015',
    watchedOn: '06/11/2016',
    isFavorite: true
  }, {
    id: 4,
    name: 'Rogue Nation',
    medium: 'Movie',
    category: 'Science Fiction',
    year: '2015',
    watchedOn: '10/10/2016',
    isFavorite: false
  },  {
    id: 5,
    name: 'Boss Baby',
    medium: 'Movie',
    category: 'Animation',
    year: '2017',
    watchedOn: '05/10/2017',
    isFavorite: false
  }
  ];
  
  constructor(private http: Http) { 
    
  }
  
  get(medium) {
    const searchParams = new URLSearchParams();
    searchParams.append('medium', medium);
    return this.http.get('mediaItems', { search: searchParams})
      .map(response => {
        return response.json().mediaItems;
      });
  }
  
  add(mediaItem) {
    this.mediaItems.push(mediaItem);
  }
  
  delete(mediaItem) {
    const index = this.mediaItems.indexOf(mediaItem);
    if(index >= 0) {
      this.mediaItems.splice(index, 1)
    }
  }
  

}
