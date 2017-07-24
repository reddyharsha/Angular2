import { Component } from '@angular/core';

// To decorate a component we need atleast two properties.. Selector and template/templateUrl.
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Harsha\'s test app';

  firstMediaItem = {
    id: 1,
    name: 'Firebug',
    medium: 'Series',
    category: 'Science Fiction',
    year: '2010',
    watchedOn: '12/10/2016',
    isFavorite: false
  };

  onMediaItemDelete(mediaItem) {
    alert('Want to delete ' + mediaItem.name + '?');
  };

}
