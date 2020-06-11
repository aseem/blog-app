import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { PostListComponent } from "./post-list/post-list.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { PostCardComponent } from "./post-card/post-card.component";
import { LikeButtonComponent } from "./like-button/like-button.component";

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostCardComponent,
    LikeButtonComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
