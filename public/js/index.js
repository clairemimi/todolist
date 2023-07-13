const express = require('express');
const { resolve } = require('path');
const { userId } = require('crypto');

// DECLARATIONS
const app = express();
const { todolist } = require('/data/db.json');
const { writeFileSync } = require('fs');

// CONFIGURATION DE L'APP
app.use(express.static(resolve('public')));
app.use(express.json());
app.use(express.set());
app.use(express.delete());

app.post('/todolist/create', (req, res) => {
  todolist.push(req.body);
  const newTodolist = req.body;
  newTodolist.id = userId();
  newTodolist.done = false;
  newTodolist.push(newTodolist);
  updateJSON();
  res.end();
});

app.set('/todolist/modify', (req, res) => {
  todolist.splice(req.body);
  const newTodolist = req.body;
  newTodolist.id = userId();
  newTodolist.done = true;
  newTodolist.splice(newTodolist);
  updateJSON();
  res.end();
});

app.delete('/todolist/delete', (req, res) => {
  todolist.find('id') = task(req.body);
  todolist.taskid(id);
  todolist.remove({TextTrackList:'id'});
  updateJSON();
  res.end();
});


function updateJSON() {
  writeFileSync(
    resolve('data', 'db.json'),
    JSON.stringify({ todolist }, null, 2)
  );
}


