import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: `
	hi {{name}}
  `
})
export class AppComponent {
  name: string = "aaaa";
}
