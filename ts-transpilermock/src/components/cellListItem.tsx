import { Cell } from '../state';
import CodeCell from './codeCell';
import TextEditor from './textEditor';
import ActionBar from './actionBar';
import './cellListItem.css';

interface cellListItemProps {
  cell: Cell;
}
const CellListItem: React.FC<cellListItemProps> = ({ cell }) => {
  let child: JSX.Element;
  if (cell.type === 'code') {
    child = 
      <>
        <div className='actionBarWrapper'>
          <ActionBar id={cell.id} />
        </div>
        <CodeCell cell={cell} />
      </>
    
  } else {
    child = (
      <>
        <TextEditor cell={cell} />
        <ActionBar id={cell.id} />
      </>
    );
  }
  return <div className='cellListItem'>{child}</div>;
};
export default CellListItem;
