import { useDispatch } from 'react-redux';
import { ActionCreators } from '../state';
import { bindActionCreators } from 'redux';
import { useMemo } from 'react';

export const useActions = () => {
  const dispatch = useDispatch();
  return useMemo(() => {
    return bindActionCreators(ActionCreators, dispatch);
  }, [dispatch]);
};
