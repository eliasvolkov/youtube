import { fetchVideos } from "./routine";

// interface IState{
//   data: object[],
//   loading: boolean,
//   error: object,
// }
const initialState = {
  data: [],
  loading: false,
  error: null
};

export const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case fetchVideos.TRIGGER:
      return { ...state, loading: true };
    case fetchVideos.SUCCESS:
      return { ...state, data: action.payload };
    case fetchVideos.FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
