import { Pipe, PipeTransform } from "@angular/core";

const intervals = {
  year: 31536000,
  month: 2592000,
  week: 604800,
  day: 86400,
  hour: 3600,
  minute: 60,
  second: 1,
};

@Pipe({
  name: "fuzzyDate",
})
export class FuzzyDatePipe implements PipeTransform {
  transform(value: Date): string {
    let secondsAgo = Math.floor(new Date().getSeconds() - value.getSeconds());
    if (secondsAgo < intervals["minute"]) {
      return "Just now";
    }
    if (secondsAgo < intervals["hour"]) {
      return `${Math.floor(secondsAgo / 60)} minutes ago`;
    }
    if (secondsAgo < intervals["day"]) {
      return `${Math.floor(secondsAgo / intervals["hour"])} hours ago`;
    }
    if (secondsAgo < intervals["week"]) {
      return `${Math.floor(secondsAgo / intervals["day"])} days ago`;
    }
    return "a long time ago";
  }
}
