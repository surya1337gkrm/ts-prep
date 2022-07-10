import { rootState } from '../state';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
export const useTypedSelector: TypedUseSelectorHook<rootState> = useSelector;
