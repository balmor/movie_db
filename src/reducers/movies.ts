import { MoviesType, MoviesActionTypes, SuccessResponse } from '../actions/movies';

export type IState = {
  data?: SuccessResponse | null | undefined;
  error?: string | null | undefined;
  isLoading: boolean;
  isFailed: boolean;
};

export const initialState: IState = {
  data: null,
  error: null,
  isLoading: false,
  isFailed: false,
};

const reducer = (state: IState, action: MoviesActionTypes): IState => {
  const { type, data, error } = action;

  switch (type) {
    case MoviesType.REQUEST:
      return { ...initialState, isLoading: true, isFailed: false };
    case MoviesType.SUCCESS:
      return { ...state, data, isLoading: false, isFailed: false };
    case MoviesType.FAILURE:
      return { ...state, error, isLoading: false, isFailed: true };
    default:
      return state;
  }
};

export default reducer;
