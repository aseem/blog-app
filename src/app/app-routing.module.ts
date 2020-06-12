import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PostListComponent } from "./post-list/post-list.component";
import { ComposeComponent } from "./compose/compose.component";

const routes: Routes = [
  { path: "", component: PostListComponent },
  { path: "compose", component: ComposeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
