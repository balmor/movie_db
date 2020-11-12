import { SearchType, SearchActionTypes, SuccessSearchResponse } from '../actions/search';

export type ISearchState = {
  data?: SuccessSearchResponse | null | undefined;
  query?: string | null | undefined;
  error?: string | null | undefined;
  isLoading: boolean;
  isFailed: boolean;
};

export const initialSearchState: ISearchState = {
  data: null,
  query: null,
  error: null,
  isLoading: false,
  isFailed: false,
};

const reducer = (
  state: ISearchState = initialSearchState,
  action: SearchActionTypes
): ISearchState => {
  const { type, data, error, query } = action;

  switch (type) {
    case SearchType.SEARCH_REQUEST:
      return { ...state, isLoading: true, isFailed: false };
    case SearchType.SEARCH_SUCCESS:
      return {
        ...state,
        data,
        query,
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
