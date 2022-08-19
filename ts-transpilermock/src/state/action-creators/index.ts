import { Dispatch } from 'react';
import { ActionType } from '../action-types';
import {
  updateCellAction,
  moveCellAction,
  insertCellAfterAction,
  deleteCellAction,
  Action,
} from '../actions';
import { cellTypes, directions } from '../cell';
import bundle from '../../bundler';

export const updateCell = (id: string, content: string): updateCellAction => {
  return {
    type: ActionType.UPDATE_CELL,
    payload: {
      id,
      content,
    },
  };
};
export const deleteCell = (id: string): deleteCellAction => {
  return {
    payload: id,
    type: ActionType.DELETE_CELL,
  };
};
export const insertCellAfter = (
  id: string | null,
  celltype: cellTypes
): insertCellAfterAction => {
  return {
    type: ActionType.INSERT_CELL_AFTER,
    payload: {
      id,
      type: celltype,
    },
  };
};
export const moveCell = (id: string, direction: directions): moveCellAction => {
  return {
    type: ActionType.MOVE_CELL,
    payload: {
      id,
      direction,
    },
  };
};

export const createBundle = (cellId: string, input: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.BUNDLE_START,
      payload: {
        cellId,
      },
    });

    const result = await bundle(input);

    dispatch({
      type: ActionType.BUNDLE_COMPLETE,
      payload: {
        cellId,
        bundle: result,
      },
    });
  };
};
