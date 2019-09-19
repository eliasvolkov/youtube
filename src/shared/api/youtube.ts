interface API {
  api_key: string;
  api_key1: string;

  findVideos(title: string): any;
  getVideos(): Promise<object[]>;
  openVideo(id: string): any;
}

// there's some error with this.api_key
export default class YouTube implements API {
  api_key: string;
  api_key1: string;
  constructor() {
    this.api_key = "AIzaSyAqO8_RkQkvaQ_s3th0qlRYB-0oRmsSIAo";
    this.api_key1 = "AIzaSyCoeI5EbIirbYMCf-xl6XoZp1sQ7I5GFJQ";
  }

  async findVideos(title: string): Promise<object[]> {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?q=${title}&key=${this.api_key1}&maxResults=35&part=snippet`
    );
    const videos = await response.json();
    return videos.items;
  }

  async getVideos(): Promise<object[]> {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&chart=mostPopular&maxResults=35&regionCode=US&key=AIzaSyAqO8_RkQkvaQ_s3th0qlRYB-0oRmsSIAo`
    );
    const videos = await response.json();
    return videos.items;
  }

  async openVideo(id: string) {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?id=${id}&key=${this.api_key}&part=snippet,contentDetails,statistics,status`
    );
    const video = await response.json();
    return video.items;
  }
}
