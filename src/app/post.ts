export class Post {
  title: string;
  body: string;
  likes: number;

  constructor(title: string, body: string) {
    this.title = title;
    this.body = body;
    this.likes = 0;
  }
}
