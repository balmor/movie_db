export enum MoviesType {
  REQUEST = 'REQUEST',
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE',
}

export interface RequestType {
  type: typeof MoviesType.REQUEST;
  data: null;
}

export interface SuccessType {
  type: typeof MoviesType.SUCCESS;
  data: SuccessResponse;
}

export interface SuccessResponse {
  page: number;
  results: Array<{ id: number; title: string; poster_path: string }>;
}

export interface FailureType {
  type: typeof MoviesType.FAILURE;
  data: FailureResponse;
}

export interface FailureResponse {
  page: null;
  results: null;
  error: string;
}

export type MoviesActionTypes = RequestType | SuccessType | FailureType;

export const request = (): RequestType => ({ type: MoviesType.REQUEST, data: null });
export const success = (data: SuccessResponse): SuccessType => ({
  type: MoviesType.SUCCESS,
  data,
});
export const failure = (data: FailureResponse): FailureType => ({
  type: MoviesType.FAILURE,
  data,
});
