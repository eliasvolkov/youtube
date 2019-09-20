export const filterVideos = (state: any) =>
  state.filter((item: any) => item.id.kind == "youtube#video");
