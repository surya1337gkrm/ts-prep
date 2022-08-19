import { useActions } from '../hooks/useActions';
import './actionBar.css';
interface actionBarProps {
  id: string;
}

const ActionBar: React.FC<actionBarProps> = ({ id }) => {
  const { moveCell, deleteCell } = useActions();
  return (
    <div className='actionBar'>
      <button
        className='button is-primary is-small'
        onClick={() => moveCell(id, 'up')}>
        <span className='icon'>
          <i className='fas fa-arrow-up' />
        </span>
      </button>
      <button
        className='button is-primary is-small'
        onClick={() => moveCell(id, 'down')}>
        <span className='icon'>
          <i className='fas fa-arrow-down' />
        </span>
      </button>
      <button
        className='button is-primary is-small'
        onClick={() => deleteCell(id)}>
        <span className='icon'>
          <i className='fas fa-trash-can' />
        </span>
      </button>
    </div>
  );
};
export default ActionBar;
