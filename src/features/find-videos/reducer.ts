import { findVideoByTitle } from "./routine";

interface State {
  data: any;
  loading: boolean;
  error: any;
}
const initialState: State = {
  data: [],
  loading: false,
  error: null
};

export const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case findVideoByTitle.TRIGGER:
      return { ...state, loading: true };
    case findVideoByTitle.SUCCESS:
      return { ...state, data: action.payload };
    case findVideoByTitle.FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
