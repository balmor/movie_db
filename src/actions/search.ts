export enum SearchType {
  SEARCH_REQUEST = 'SEARCH_REQUEST',
  SEARCH_SUCCESS = 'SEARCH_SUCCESS',
  SEARCH_FAILURE = 'SEARCH_FAILURE',
  SEARCH_PAGINATION = 'SEARCH_PAGINATION',
  SEARCH_CLEAR = 'SEARCH_CLEAR',
}

export interface RequestSearchType {
  type: typeof SearchType.SEARCH_REQUEST;
  data: null;
  query?: null;
  error?: null;
}

export interface SuccessSearchType {
  type: typeof SearchType.SEARCH_SUCCESS;
  data: SuccessSearchResponse;
  query: string | null | undefined;
  error?: null;
}

export interface SuccessSearchResponse {
  page: number;
  results: Array<{ id: number; title: string; poster_path: string }>;
  total_pages: number;
  total_results: number;
}

export interface FailureSearchType {
  type: typeof SearchType.SEARCH_FAILURE;
  error: string | null | undefined;
  query?: null;
  data?: null;
}

export type FailureSearchResponse = {
  error: string | null | undefined;
  query?: null;
  data?: null;
};

export interface SearchClearType {
  type: typeof SearchType.SEARCH_CLEAR;
  data?: null;
  error?: null;
  query?: null;
}

export type SearchActionTypes =
  | RequestSearchType
  | SuccessSearchType
  | FailureSearchType
  | SearchClearType;

export const fetchSearchRequest = (): RequestSearchType => ({
  type: SearchType.SEARCH_REQUEST,
  data: null,
});
export const fetchSearchSuccess = (
  data: SuccessSearchResponse,
  query: string | null | undefined
): SuccessSearchType => ({
  type: SearchType.SEARCH_SUCCESS,
  data,
  query,
});
export const fetchSearchFailure = (error: string): FailureSearchType => ({
  type: SearchType.SEARCH_FAILURE,
  error,
});

export const clearSearch = (): SearchClearType => ({
  type: SearchType.SEARCH_CLEAR,
});
