export enum MoviesType {
  REQUEST = 'REQUEST',
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE',
}

export interface RequestType {
  type: typeof MoviesType.REQUEST;
  response: null;
}

export interface SuccessType {
  type: typeof MoviesType.SUCCESS;
  response: SuccessResponse;
}

export interface SuccessResponse {
  data: { title: string };
}

export interface FailureType {
  type: typeof MoviesType.FAILURE;
  response: FailureResponse;
}

export interface FailureResponse {
  response: string;
}

export type MoviesActionTypes = RequestType | SuccessType | FailureType;

export const request = (): RequestType => ({ type: MoviesType.REQUEST, response: null });
export const success = (response: SuccessResponse): SuccessType => ({
  type: MoviesType.SUCCESS,
  response,
});
export const failure = (response: FailureResponse): FailureType => ({
  type: MoviesType.FAILURE,
  response,
});
