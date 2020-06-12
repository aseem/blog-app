import { Component, OnInit, OnDestroy } from "@angular/core";
import { Post } from "../post";
import { PostService } from "../post.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.css"],
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: Post[];
  postSubscription: Subscription;

  constructor(private postService: PostService) {
    this.posts = this.postService.getPosts();
  }

  ngOnInit(): void {
    this.postSubscription = this.postService.postsUpdated.subscribe(() => {
      this.posts = this.postService.getPosts();
    });
  }

  ngOnDestroy(): void {
    this.postSubscription.unsubscribe();
  }
}
