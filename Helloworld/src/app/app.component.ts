import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HelloWorld';
  imgUrl = 'assets/BL_logo_square_png.png'; // Path to the image
  url = 'https://www.bridgelabz.com'; // URL to open

  // Event handler for opening the URL in a new tab
  onClick(event: Event): void {
    console.log('BridgeLabz Logo Clicked!', event);
    window.open(this.url, '_blank'); // Open in a new tab
  }
}