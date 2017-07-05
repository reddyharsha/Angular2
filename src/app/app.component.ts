import { Component } from '@angular/core';

// To decorate a component we need atleast two properties.. Selector and template/templateUrl.
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Harsha\'s test app';
}
