import { useEffect, useState } from 'react';

import CodeEditor from '../components/Monacoeditor';
import Preview from '../components/preview';
import bundle from '../bundler';

import Resizable from './resizable';

const CodeCell = () => {
  const [input, setInput] = useState('');
  const [code, setCode] = useState('');
  const [err,setErr]=useState('')

  //   const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
  //     setInput(e.target.value);
  //   };
  useEffect(() => {
    const timer = setTimeout(async () => {
      const output = await bundle(input);
      setCode(output.code);
      setErr(output.err)
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [input]);
  // const handleClick = async () => {
  //   // if you want to display the transpiled code update the code state.
  //   const output = await bundle(input);
  //   setCode(output);
  // };

  return (
    <>
      <Resizable direction='vertical'>
        <div style={{ height: '100%', display: 'flex', flexDirection: 'row' }}>
          <Resizable direction='horizantal'>
            <CodeEditor
              initialValue={'const a=1;'}
              onChange={(value) => {
                setInput(value);
              }}
            />
          </Resizable>
          {/* <textarea value={input} onChange={handleChange} /> */}
          {/* <div>
            <button onClick={handleClick}>Submit</button>
          </div> */}
          {/* <pre>{code}</pre> */}
          <Preview code={code} err={err} />
        </div>
      </Resizable>
    </>
  );
};
export default CodeCell;
