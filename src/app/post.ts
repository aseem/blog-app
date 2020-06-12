export class Post {
  title: string;
  body: string;
  likes: number;
  created: Date;

  constructor(title: string, body: string) {
    this.title = title;
    this.body = body;
    this.likes = 0;
    this.created = new Date("2020-06-11");
  }
}
