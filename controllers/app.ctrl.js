exports.homePage = (req, res) => {
  res.end();
};
const { resolve } = require('path');

exports.homeCtrl = (req, res) => {
  res.sendFile(resolve('viewe', 'home.pug'));
};

exports.todoFormCtrl = (req, res) => {
  res.sendFile(resolve('viewe', 'todoForm.pug'));
};

exports.todolistCtrl = (req, res) => {
  res.sendFile(resolve('viewe', 'todolist.pug'));
};
