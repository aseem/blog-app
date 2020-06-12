import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Post } from "../post";

@Component({
  selector: "app-compose",
  templateUrl: "./compose.component.html",
  styleUrls: ["./compose.component.css"],
})
export class ComposeComponent implements OnInit {
  @ViewChild("composeForm") composeForm: NgForm;

  constructor() {}

  ngOnInit(): void {}

  handleSubmission() {
    console.log(this.composeForm.value);
    let newPost = new Post(
      this.composeForm.value["title"],
      this.composeForm.value["body"]
    );

    this.composeForm.reset();
  }
}
