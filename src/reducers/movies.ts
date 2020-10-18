import { MoviesType, MoviesActionTypes, SuccessResponse, FailureResponse } from '../actions/movies';

export type IState = {
  data: FailureResponse | SuccessResponse | null | undefined;
  isLoading: boolean;
  isFailed: boolean;
};

export const initialState: IState = {
  data: null,
  isLoading: false,
  isFailed: false,
};

const reducer = (state: IState, action: MoviesActionTypes): IState => {
  const { type, data } = action;

  switch (type) {
    case MoviesType.REQUEST:
      return { ...initialState, isLoading: true, isFailed: false };
    case MoviesType.SUCCESS:
      return { ...state, data, isLoading: false, isFailed: false };
    case MoviesType.FAILURE:
      return { ...state, data, isLoading: false, isFailed: true };
    default:
      return state;
  }
};

export default reducer;
