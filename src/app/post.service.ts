import { Injectable } from "@angular/core";
import { Post } from "./post";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PostService {
  postList: Post[];
  postsUpdated = new Subject();

  constructor() {
    this.postList = [
      new Post("My first angular app", "body of my first angular app."),
      new Post(
        "My first angular component",
        "body of my first angular component."
      ),
    ];
  }

  addPost(post: Post) {
    this.postList.push(post);
  }

  getPosts() {
    return [...this.postList];
  }
}
