export enum SearchType {
  SEARCH_REQUEST = 'SEARCH_REQUEST',
  SEARCH_SUCCESS = 'SEARCH_SUCCESS',
  SEARCH_FAILURE = 'SEARCH_FAILURE',
  SEARCH_PAGINATION = 'SEARCH_PAGINATION',
}

export interface RequestSearchType {
  type: typeof SearchType.SEARCH_REQUEST;
  data: null;
}

export interface SuccessSearchType {
  type: typeof SearchType.SEARCH_SUCCESS;
  data: SuccessSearchResponse;
}

export interface SuccessSearchResponse {
  page: number;
  results: Array<{ id: number; title: string; poster_path: string }>;
  total_pages: number;
  total_results: number;
}

export interface FailureSearchType {
  type: typeof SearchType.SEARCH_FAILURE;
  data: FailureSearchResponse;
}

export interface FailureSearchResponse {
  page: null;
  results: null;
  total_pages?: number;
  total_results?: number;
  error: string;
}

export type SearchActionTypes = RequestSearchType | SuccessSearchType | FailureSearchType;

export const fetchSearchRequest = (): RequestSearchType => ({
  type: SearchType.SEARCH_REQUEST,
  data: null,
});
export const fetchSearchSuccess = (data: SuccessSearchResponse): SuccessSearchType => ({
  type: SearchType.SEARCH_SUCCESS,
  data,
});
export const fetchSearchFailure = (data: FailureSearchResponse): FailureSearchType => ({
  type: SearchType.SEARCH_FAILURE,
  data,
});
