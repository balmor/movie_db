import { SearchType, SearchActionTypes, SuccessSearchResponse } from '../actions/search';

export type ISearchState = {
  data?: SuccessSearchResponse | null | undefined;
  error?: string | null | undefined;
  isLoading: boolean;
  isFailed: boolean;
};

export const initialSearchState: ISearchState = {
  data: null,
  error: null,
  isLoading: false,
  isFailed: false,
};

const reducer = (state: ISearchState, action: SearchActionTypes): ISearchState => {
  const { type, data, error } = action;

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
      return { ...state, error, isLoading: false, isFailed: true };
    default:
      return state;
  }
};

export default reducer;
