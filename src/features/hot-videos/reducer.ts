import { fetchVideos } from "./routine";
type State = {
  data: any;
  loading: boolean;
  error: any;
};
const initialState: State = {
  data: [],
  loading: false,
  error: null
};

export const reducer = (state: State = initialState, action: any) => {
  switch (action.type) {
    case fetchVideos.TRIGGER:
      return { ...state, loading: true };
    case fetchVideos.SUCCESS:
      return { ...state, data: action.payload, loading: false };
    case fetchVideos.FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
