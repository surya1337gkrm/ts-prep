import axios from 'axios';
const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  const todo = response.data as Todo;

  const id = todo.id;
  const task = todo.title;
  const completed = todo.completed;

  logTodo(id, task, completed);
});

const logTodo = (id: number, task: string, completed: boolean) => {
  console.log(id, task, completed);
};

// compile the typescript code using tsc <filename.ts>
// -.js file will be created.
// - run the .js code using node command
// or
// use ts-node package to run the typescript directly without all these steps
