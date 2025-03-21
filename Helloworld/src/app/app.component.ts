
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Helloworld';
  imgUrl = "assets/BL_logo_square_png.png"; 
  url = "https://www.bridgelabz.com";
  userName: string = ""; // User input binding

  onClick(event: Event): void {
    console.log("BridgeLabz logo clicked!", event);
    window.open(this.url, "_blank");
  }
}
