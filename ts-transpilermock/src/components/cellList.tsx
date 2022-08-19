import { useTypedSelector } from '../hooks/useTypedSelector';
import CellListItem from './cellListItem';
import AddCell from './addCell';
import React from 'react';
import './cellList.css';

const CellList: React.FC = () => {
  const cells = useTypedSelector(({ cells: { order, data } }) =>
    order.map((id) => data[id])
  );
  const renderedCells = cells.map((cell) => (
    <React.Fragment key={cell.id}>
      <CellListItem cell={cell} />
      <AddCell previousCellID={cell.id} />
    </React.Fragment>
  ));
  return (
    <div className='cellList'>
      <AddCell
        forceVisible={cells.length === 0 ? true : false}
        previousCellID={null}
      />
      {renderedCells}
    </div>
  );
};
export default CellList;
