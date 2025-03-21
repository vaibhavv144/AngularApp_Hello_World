import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HelloWorld';
  imgUrl = "./assets/BL_logo_square_png.png";
  url = "https://www.bridgelabz.com";
  userName: string = "";
  nameError: string = "";

  ngOnInit(): void {
    this.title = "Hello from BridgeLabz.";
  }

  onClick($event: Event): void {
    console.log("Save button is clicked!", $event);
    window.open(this.url, "_blank");
  }

  onInput(event: Event): void {
    console.log("Change Event Occurred", event);
    
    const inputElement = event.target as HTMLInputElement; // Cast event target to input element
    this.userName = inputElement.value; // Get value from input field

    const nameRegex = /^[A-Z]{1}[a-zA-Z\s]{2,}$/; // Starts with uppercase, min 3 characters

    if (nameRegex.test(this.userName)) {
      this.nameError = "";
    } else {
      this.nameError = "Name is Incorrect!";
    }
  }
}