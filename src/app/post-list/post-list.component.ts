import { Component, OnInit } from "@angular/core";
import { Post } from "../post";
@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.css"],
})
export class PostListComponent implements OnInit {
  posts: Post[];

  constructor() {
    this.posts = [
      new Post("My first angular app", "body of my first angular app."),
      new Post(
        "My first angular component",
        "body of my first angular component."
      ),
    ];
  }

  ngOnInit(): void {}
}
