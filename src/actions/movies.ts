export enum MoviesType {
  REQUEST = 'REQUEST',
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE',
}

export interface RequestType {
  type: typeof MoviesType.REQUEST;
  data: null;
  error?: null;
}

export interface SuccessType {
  type: typeof MoviesType.SUCCESS;
  data: SuccessResponse;
  error?: null;
}

export interface SuccessResponse {
  page: number;
  results: Array<{ id: number; title: string; poster_path: string }>;
}

export interface FailureType {
  type: typeof MoviesType.FAILURE;
  error: string | null | undefined;
  data?: null;
}

export type FailureResponse = {
  error: string | null | undefined;
  data?: null;
};

export type MoviesActionTypes = RequestType | SuccessType | FailureType;

export const request = (): RequestType => ({ type: MoviesType.REQUEST, data: null });
export const success = (data: SuccessResponse): SuccessType => ({
  type: MoviesType.SUCCESS,
  data,
});
export const failure = (error: string): FailureType => ({
  type: MoviesType.FAILURE,
  error,
});
