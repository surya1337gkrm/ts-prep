import 'bulmaswatch/superhero/bulmaswatch.min.css';
import ReactDOM from 'react-dom';
import TextEditor from './components/textEditor';
// import CodeCell from './components/codeCell';

const App = () => {
  return (
    <>
      {/* <CodeCell /> */}
      <TextEditor />
    </>
  );
};
ReactDOM.render(<App />, document.querySelector('#root'));
