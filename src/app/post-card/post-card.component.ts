import { Component, OnInit, Input } from "@angular/core";
import { Post } from "../post";

@Component({
  selector: "app-post-card",
  templateUrl: "./post-card.component.html",
  styleUrls: ["./post-card.component.css"],
})
export class PostCardComponent implements OnInit {
  @Input() post: Post;
  likeCount: number;

  constructor() {
    this.likeCount = 0;
  }

  ngOnInit(): void {}

  updateLikes() {
    this.likeCount++;
  }
}
