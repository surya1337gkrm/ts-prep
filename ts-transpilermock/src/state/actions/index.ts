import { ActionType } from '../action-types';
import { cellTypes, directions } from '../cell';

export interface moveCellAction {
  type: ActionType.MOVE_CELL;
  payload: {
    id: string;
    direction: directions;
  };
}

export interface deleteCellAction {
  type: ActionType.DELETE_CELL;
  payload: string;
}

export interface insertCellAfterAction {
  type: ActionType.INSERT_CELL_AFTER;
  payload: {
    id: string | null;
    type: cellTypes;
  };
}

export interface updateCellAction {
  type: ActionType.UPDATE_CELL;
  payload: {
    id: string;
    content: string;
  };
}

export interface bundleStartAction {
  type: ActionType.BUNDLE_START;
  payload: {
    cellId: string;
  };
}

export interface bundleCompleteAction {
  type: ActionType.BUNDLE_COMPLETE;
  payload: {
    cellId: string;
    bundle: {
      code: string;
      err: string;
    };
  };
}

export type Action =
  | moveCellAction
  | insertCellAfterAction
  | updateCellAction
  | deleteCellAction
  | bundleStartAction
  | bundleCompleteAction;
