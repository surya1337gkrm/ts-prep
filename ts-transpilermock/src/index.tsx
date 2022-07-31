import ReactDOM from 'react-dom';
import { ChangeEvent, useState, useEffect, useRef } from 'react';
//before doing this import, copy esbuild.wasm file from node_modules-esbuild-wasm folder and paste in public folder
import * as esbuild from 'esbuild-wasm';
//used to download npm packages directly from unpkg.com instead of npmjs bcoz of cors policy
import { unpkgPathPlugin } from './plugins/unpkg-path-plugin';
import { fetchPlugin } from './plugins/fetch-plugin';

const App = () => {
  const ref = useRef<any>();
  const [input, setInput] = useState('');
  // const [code, setCode] = useState('');
  const iframeRef = useRef<any>();

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };
  const handleClick = async () => {
    // console.log(input);
    if (!ref.current) {
      return;
    }

    //refresh the iframe html content
    iframeRef.current.srcdoc = html;

    // console.log(ref.current);
    // const result = await ref.current.transform(input, {
    //   loader: 'jsx',
    //   target: 'es2015',
    // });
    // console.log(result);
    const result = await ref.current.build({
      entryPoints: ['index.js'],
      bundle: true,
      write: false,
      plugins: [unpkgPathPlugin(), fetchPlugin(input)],
      define: {
        'process.env.NODE_ENV': '"production"',
        global: 'window',
      },
    });
    // console.log(result);
    // if you want to display the transpiled code update the code state.
    //  setCode(result.outputFiles[0].text);

    // posts a message with required data from the iframe and
    // this event will be listened in the iframe html.
    iframeRef.current.contentWindow.postMessage(
      result.outputFiles[0].text,
      '*'
    );
  };

  const startService = async () => {
    ref.current = await esbuild.startService({
      worker: true,
      /*(if we give direct path to wasmURL it will fetch the file from public folder
      or we can pass the unpkg url so that it can fetch the file from unpkg*/
      // wasmURL: '/esbuild.wasm',
      wasmURL: 'https://unpkg.com/esbuild-wasm@0.8.27/esbuild.wasm',
    });
    // console.log(service);
  };
  useEffect(() => {
    startService();
  }, []);
  // const html = `<script>${code}</script>`;
  const html = `<html>
    <head></head>
      <body>
      <div id='root'></div>
      <script>
        window.addEventListener('message',(event)=>{
          
          try{
            eval(event.data)
          }
          catch(err){
          const root=document.querySelector('#root');
          root.innerHTML='<div style="color:red;"><h4>Run Time Error :</h4>'+err+'</div>';
          throw err;
          }
        },false)
      </script>
      </body>
  </html>`;

  return (
    <>
      <div>
        <textarea value={input} onChange={handleChange} />
        <div>
          <button onClick={handleClick}>Submit</button>
        </div>
        {/* <pre>{code}</pre> */}
        <iframe
          title='preview'
          ref={iframeRef}
          sandbox='allow-scripts'
          srcDoc={html}
        />
      </div>
    </>
  );
};
ReactDOM.render(<App />, document.querySelector('#root'));
