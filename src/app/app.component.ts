import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'assignment';

  //
  items = [`Teapot`, `Lamp`, `Phone`, `Television`, `Fishbowl`];

  // 
  userFavoriteItem!: string;
}
