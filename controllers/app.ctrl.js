exports.homePage = (req, res) => {
  res.render('viewe', 'home.pug');
};

exports.homeCtrl = (req, res) => {
  res.render('viewe', 'home.pug');
};

exports.todoFormCtrl = (req, res) => {
  res.render('viewe', 'todoForm.pug');
};

exports.todolistCtrl = (req, res) => {
  res.render('viewe', 'todolist.pug');
};
