import {
  SearchType,
  SearchActionTypes,
  SuccessSearchResponse,
  FailureSearchResponse,
} from '../actions/search';

export type ISearchState = {
  data: FailureSearchResponse | SuccessSearchResponse | null | undefined;
  isLoading: boolean;
  isFailed: boolean;
};

export const initialSearchState: ISearchState = {
  data: null,
  isLoading: false,
  isFailed: false,
};

const reducer = (state: ISearchState, action: SearchActionTypes): ISearchState => {
  const { type, data } = action;

  switch (type) {
    case SearchType.SEARCH_REQUEST:
      return { ...initialSearchState, isLoading: true, isFailed: false };
    case SearchType.SEARCH_SUCCESS:
      return {
        ...state,
        data,
        isLoading: false,
        isFailed: false,
      };
    case SearchType.SEARCH_FAILURE:
      return { ...state, data, isLoading: false, isFailed: true };
    default:
      return state;
  }
};

export default reducer;
