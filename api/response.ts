import {QueryObserverResult, RefetchOptions} from "@tanstack/query-core";
import {UseQueryResult} from "@tanstack/react-query";

export type Refetch<T> = (
  options?: RefetchOptions
) => Promise<QueryObserverResult<APIResponse<T>>>;

export class APIDataResponse<T> {
  data: T | null;
  isLoading: boolean;
  isFetching: boolean;
  isError: boolean;
  isForbidden: boolean;
  refetch: Refetch<T>;

  constructor(queryResult: UseQueryResult<APIResponse<T>>) {
    this.isLoading = queryResult.isLoading;
    this.isFetching = queryResult.isFetching;
    this.data = queryResult.data?.data ?? null;
    this.isError = queryResult.data?.isError ?? !!queryResult.error ?? false;
    this.isForbidden = queryResult.data?.isForbidden ?? false;
    this.refetch = queryResult.refetch;
  }
}

export class APIResponse<T> {
  data: T | undefined;
  isError: boolean;
  isForbidden: boolean;

  constructor(data: T | undefined, isError = false, isForbidden = false) {
    this.data = data;
    this.isError = isError;
    this.isForbidden = isForbidden;
  }
}

export const NoDataAPIResponse = new APIResponse<never>(undefined, false, false);
export const ErrorAPIResponse = new APIResponse<never>(undefined, true, false);
export const ForbiddenAPIResponse = new APIResponse<never>(undefined, true, true);
