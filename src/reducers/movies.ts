import { MoviesType, MoviesActionTypes, SuccessResponse, FailureResponse } from '../actions/movies';

export type IState = {
  response?: SuccessResponse | FailureResponse | null | undefined;
  isLoading: boolean;
  isFailed: boolean;
};

export const initialState: IState = {
  response: null,
  isLoading: false,
  isFailed: false,
};

const reducer = (state: IState, action: MoviesActionTypes): IState => {
  const { type, response } = action;

  switch (type) {
    case MoviesType.REQUEST:
      return { ...initialState, isLoading: true, isFailed: false };
    case MoviesType.SUCCESS:
      return { ...state, response, isLoading: false, isFailed: false };
    case MoviesType.FAILURE:
      return { ...state, response, isLoading: false, isFailed: true };
    default:
      return state;
  }
};

export default reducer;
