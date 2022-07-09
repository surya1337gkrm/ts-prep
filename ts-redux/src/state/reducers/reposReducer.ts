import { ActionType } from '../action-types';
import { Action } from '../actions';

interface reposState {
  loading: boolean;
  error: string | null;
  data: string[];
}

//return type should be reposState type.
const initialState = { loading: false, error: null, data: [] };

const reposReducer = (
  state: reposState = initialState,
  action: Action
): reposState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOS:
      return { ...state, error: null, loading: true, data: [] };
    case ActionType.SEARCH_REPOS_SUCCESS:
      return { ...state, error: null, loading: false, data: action.payload };
    case ActionType.SEARCH_REPOS_FAIL:
      return { ...state, error: action.payload, loading: true, data: [] };
    default:
      return state;
  }
};

export default reposReducer;
