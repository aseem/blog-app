import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";

@Component({
  selector: "app-like-button",
  templateUrl: "./like-button.component.html",
  styleUrls: ["./like-button.component.css"],
})
export class LikeButtonComponent implements OnInit {
  @Output() newLike = new EventEmitter();
  @Input() numLikes: number;

  constructor() {}

  ngOnInit(): void {}

  onClicked() {
    this.newLike.emit();
    console.log("button clicked!");
  }
}
