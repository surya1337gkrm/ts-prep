import MDEditor from '@uiw/react-md-editor';
import { useState, useEffect, useRef } from 'react';
import { useActions } from '../hooks/useActions';
import { Cell } from '../state';
import './textEditor.css';

interface textEditorProps {
  cell: Cell;
}

const TextEditor: React.FC<textEditorProps> = ({ cell }) => {
  const [editMode, setEditMode] = useState(false);
  // const [value, setValue] = useState('# Header');
  const ref = useRef<HTMLDivElement | null>(null);
  const { updateCell } = useActions();

  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (
        ref.current &&
        event.target &&
        ref.current.contains(event.target as Node)
      ) {
        return;
      }
      setEditMode(false);
    };
    document.addEventListener('click', listener, { capture: true });

    return () => {
      document.removeEventListener('click', listener, { capture: true });
    };
  }, []);

  if (editMode)
    return (
      <div ref={ref} className='text-editor'>
        <MDEditor
          value={cell.content}
          onChange={(v) => updateCell(cell.id, v || '')}
        />
      </div>
    );
  return (
    <div
      className='text-editor card'
      onClick={() => {
        setEditMode(true);
      }}>
      <div className='card-content'>
        <MDEditor.Markdown source={cell.content || '## Click to Edit'} />
      </div>
    </div>
  );
};
export default TextEditor;
