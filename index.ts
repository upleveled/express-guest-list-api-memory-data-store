import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

let id = 1;

const todos: Todo[] = [];

// Enable CORS
app.use(function (_req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  next();
});

// Get all todos
app.get('/', function (_req, res) {
  res.json(todos);
});

// New todo
app.post('/', function (req, res) {
  if (!req.body.title) {
    res
      .status(400)
      .json({ errors: [{ message: 'Request body missing a title property' }] });
    return;
  }

  const todo = { id: String(id++), title: req.body.title, completed: false };
  todos.push(todo);

  res.json(todo);
});

// Modify a single todo
app.patch('/:id', function (req, res) {
  const todo = todos.find((todo) => todo.id === req.params.id);
  if (!todo) {
    res
      .status(404)
      .json({ errors: [{ message: `Todo ${req.params.id} not found` }] });
    return;
  }

  if (req.body.title) todo.title = req.body.title;
  if (req.body.completed) todo.completed = req.body.completed;
  res.json(todo);
});

// Delete a single todo
app.delete('/:id', function (req, res) {
  const todo = todos.find((todo) => todo.id === req.params.id);
  if (!todo) {
    res
      .status(404)
      .json({ errors: [{ message: `Todo ${req.params.id} not found` }] });
    return;
  }

  todos.splice(todos.indexOf(todo), 1);
  res.json(todo);
});

app.listen(5000, () => {
  console.log('🚀 Todo list server started on http://localhost:5000');
});
