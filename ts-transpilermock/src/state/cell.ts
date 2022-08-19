export type cellTypes = 'code' | 'text';
export type directions = 'up' | 'down';

export interface Cell {
  id: string;
  type: cellTypes;
  content: string;
}
