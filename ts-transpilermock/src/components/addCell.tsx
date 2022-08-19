import './addCell.css';
import { useActions } from '../hooks/useActions';

interface addCellProps {
  previousCellID: string | null;
  forceVisible?: boolean;
}

const AddCell: React.FC<addCellProps> = ({ forceVisible, previousCellID }) => {
  const { insertCellAfter } = useActions();
  return (
    <div className={`addCell ${forceVisible && 'forceVisible'}`}>
      <div className='addButtons'>
        <button
          onClick={() => insertCellAfter(previousCellID, 'code')}
          className='button is-rounded is-primary is-small'>
          <span className='icon is-small'>
            <i className='fas fa-plus' />
          </span>
          <span>Code</span>
        </button>
        <button
          onClick={() => insertCellAfter(previousCellID, 'text')}
          className='button is-rounded is-primary is-small'>
          <span className='icon is-small'>
            <i className='fas fa-plus' />
          </span>
          <span>Text</span>
        </button>
      </div>
      <div className='horizantalLine'></div>
    </div>
  );
};
export default AddCell;
