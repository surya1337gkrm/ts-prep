import { ActionType } from '../action-types';

interface actionTypeSearch {
  type: ActionType.SEARCH_REPOS;
}
interface actionTypeSearchSuccess {
  type: ActionType.SEARCH_REPOS_SUCCESS;
  payload: string[];
}
interface actionTypeSearchFail {
  type: ActionType.SEARCH_REPOS_FAIL;
  payload: string;
}
export type Action =
  | actionTypeSearch
  | actionTypeSearchSuccess
  | actionTypeSearchFail;
