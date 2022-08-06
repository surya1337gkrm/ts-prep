import MonacoEditor, { EditorDidMount } from '@monaco-editor/react';
import prettier from 'prettier';
import parser from 'prettier/parser-babel';
import { useRef } from 'react';
import './MonacoEditor.css';
import './syntax.css';

import Highlighter from 'monaco-jsx-highlighter';
import codeShift from 'jscodeshift';

interface CodeEditorProps {
  initialValue: string;
  onChange(value: string): void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ initialValue, onChange }) => {
  const editorRef = useRef<any>();

  const onEditorMount: EditorDidMount = (getValue, monacoEditor) => {
    editorRef.current = monacoEditor;

    monacoEditor.onDidChangeModelContent(() => {
      onChange(getValue());
    });

    const highlighter = new Highlighter(
      // @ts-ignore
      window.monaco,
      codeShift,
      monacoEditor
    );
    highlighter.highLightOnDidChangeModelContent(
      () => {},
      () => {},
      undefined,
      () => {}
    );
  };

  const handleFormat = () => {
    const unformattedValue = editorRef.current.getModel().getValue();
    //format the data
    const formattedValue = prettier
      .format(unformattedValue, {
        parser: 'babel',
        plugins: [parser],
        useTabs: false,
        semi: true,
        singleQuote: true,
      })
      .replace(/\n$/, '');
    //push back the data to the editor
    editorRef.current.setValue(formattedValue);
  };
  return (
    <div className='editor-wrapper'>
      <button
        onClick={handleFormat}
        className='button button-format is-primary is-small'>
        Format
      </button>
      <MonacoEditor
        editorDidMount={onEditorMount}
        value={initialValue}
        height='100%'
        language='javascript'
        theme='dark'
        options={{
          wordWrap: 'on',
          minimap: { enabled: false },
          showUnused: false,
          folding: false,
          lineNumbersMinChars: 3,
          fontSize: 16,
          scrollBeyondLastLine: false,
          automaticLayout: true,
        }}
      />
    </div>
  );
};

export default CodeEditor;
