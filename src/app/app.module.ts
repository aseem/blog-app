import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { PostListComponent } from "./post-list/post-list.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatBadgeModule } from "@angular/material/badge";
import { PostCardComponent } from "./post-card/post-card.component";
import { LikeButtonComponent } from "./like-button/like-button.component";
import { FuzzyDatePipe } from "./fuzzy-date.pipe";
import { AppRoutingModule } from "./app-routing.module";
import { ComposeComponent } from "./compose/compose.component";

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostCardComponent,
    LikeButtonComponent,
    FuzzyDatePipe,
    ComposeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
