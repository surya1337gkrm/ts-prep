import { useEffect } from 'react';
import { useActions } from '../hooks/useActions';

import CodeEditor from '../components/Monacoeditor';
import Preview from '../components/preview';
import Resizable from './resizable';
import { Cell } from '../state';

import { useTypedSelector } from '../hooks/useTypedSelector';
import { useCumulativeCode } from '../hooks/useCumulativeCode';
import './codeCell.css';

interface codeCellProps {
  cell: Cell;
}

const CodeCell: React.FC<codeCellProps> = ({ cell }) => {
  // const [input, setInput] = useState('');

  const { updateCell, createBundle } = useActions();
  const bundle = useTypedSelector((state) => state.bundles[cell.id]);

  const cumulativeCode = useCumulativeCode(cell.id);

  //   const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
  //     setInput(e.target.value);
  //   };
  useEffect(() => {
    if (!bundle) {
      createBundle(cell.id, cumulativeCode);
      return;
    }
    const timer = setTimeout(async () => {
      createBundle(cell.id, cumulativeCode);
    }, 750);

    return () => {
      clearTimeout(timer);
    };
    /*whenever we use somet variable inside the useEffect hook, 
    that should be included inside the dependency array, but the 
    code we wrote is the wanted behaviour and if we add bundle in the dependency Array, 
    as new bundle will be created for every 750ms it will end in an infinite lookup.*/
    //but to fix the dependency warning, disable the es-lint rules for the next line using this commment.

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cell.id, cumulativeCode, createBundle]);

  // const handleClick = async () => {
  //   // if you want to display the transpiled code update the code state.
  //   const output = await bundle(input);
  //   setCode(output);
  // };

  return (
    <>
      <Resizable direction='vertical'>
        <div
          style={{
            height: 'calc(100% - 10px)',
            display: 'flex',
            flexDirection: 'row',
          }}>
          <Resizable direction='horizantal'>
            <CodeEditor
              initialValue={cell.content}
              onChange={(value) => updateCell(cell.id, value)}
            />
          </Resizable>
          <div className='progressWrapper'>
            {!bundle || bundle.loading ? (
              <div className='progressCover'>
                <progress className='progess is-primary is-small' max='100' />
              </div>
            ) : (
              <Preview code={bundle.code} err={bundle.err} />
            )}
          </div>
        </div>
      </Resizable>
    </>
  );
};
export default CodeCell;
