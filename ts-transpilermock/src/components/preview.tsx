import { useEffect, useRef } from 'react';
import './preview.css';

interface previewProps {
  code: string;
  err: string;
}

const html = `<html>
    <head>
    <style>
    html{
      background-color:white;
    }
    </style>
    </head>
      <body>
      <div id='root'></div>
      <script>
      const handleError=(err)=>
      {
        const root=document.querySelector('#root');
          root.innerHTML='<div style="color:red;"><h4>Run Time Error :</h4>'+err+'</div>';
          console.log(err);
      }

      window.addEventListener('error',(event)=>{
        event.preventDefault()
        handleError(event.error)
      })
        window.addEventListener('message',(event)=>{
          
          try{
            eval(event.data)
          }
          catch(err){
          handleError(err)
          }
        },false)
      </script>
      </body>
  </html>`;

const Preview: React.FC<previewProps> = ({ code, err }) => {
  const iframeRef = useRef<any>();
  useEffect(() => {
    //refresh the iframe html content
    iframeRef.current.srcdoc = html;
    // posts a message with required data from the iframe and
    // this event will be listened in the iframe html.
    setTimeout(() => {
      iframeRef.current.contentWindow.postMessage(code, '*');
    }, 50);
  }, [code]);

  return (
    <div className='preview-wrapper'>
      <iframe
        title='preview'
        ref={iframeRef}
        sandbox='allow-scripts'
        srcDoc={html}
      />
      {err && <div className='preview-error'>{err}</div>}
    </div>
  );
};
export default Preview;
