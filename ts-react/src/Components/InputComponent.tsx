import { useState } from 'react';
interface todoState {}
const InputComponent: React.FC = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState<string[]>([]);
  const handleClick = () => {
    setTodo('');
    setTodos([...todos, todo]);
  };
  return (
    <>
      <b>Input Component</b>
      <h3>To Do</h3>
      <input value={todo} onChange={(e) => setTodo(e.target.value)} />
      <button onClick={handleClick}>Add</button>
      <br />
      <b>list</b>
      <ul>
        {todos.map((el, i) => (
          <li key={i}>{el}</li>
        ))}
      </ul>
    </>
  );
};
export default InputComponent;
