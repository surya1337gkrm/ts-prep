import produce from 'immer';
import { ActionType } from '../action-types';
import { Action } from '../actions';

interface bundlesState {
  [key: string]:
    | {
        loading: boolean;
        code: string;
        err: string;
      }
    | undefined;
}
const initialState: bundlesState = {};

const reducer = produce(
  (state: bundlesState = initialState, action: Action): bundlesState => {
    switch (action.type) {
      case ActionType.BUNDLE_START:
        state[action.payload.cellId] = {
          loading: true,
          code: '',
          err: '',
        };
        return state;
      case ActionType.BUNDLE_COMPLETE:
        state[action.payload.cellId] = {
          loading: false,
          code: action.payload.bundle.code,
          err: action.payload.bundle.err,
        };
        return state;
      default:
        return state;
    }
  },
  initialState
);
export default reducer;
