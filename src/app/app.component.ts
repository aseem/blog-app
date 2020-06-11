import { Component } from "@angular/core";
import { Post } from "./post";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "blog-app";
  posts: Post[] = [
    new Post("My first angular app", "body of my first angular app."),
    new Post(
      "My first angular component",
      "body of my first angular component."
    ),
  ];
}
