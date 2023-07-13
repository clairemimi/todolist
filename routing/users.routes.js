const router = require('express').Router();
const Task = require('../controllers/users.Ctrl');
module.exports = router;

// Créer une nouvelle tâche pour un utilisateur spécifique
router.post('/users/:userId/tasks', async (req, res) => {
  const user = await user.findById(req.params.userId);
  if (!user) {
    return res.status(404).send({ error: 'Utilisateur non trouvé.' });
  }
  const task = new Task(req.body);
  task.save();
  user.tasks.push(task._id);
  user.save();
  res.status(201).send(task);
});

// Récupérer toutes les tâches d'un utilisateur
router.get('/users/:userId/tasks', async (req, res) => {
  const user = user.findById(req.params.userId).populate('tasks');
  if (!user) {
    return res.status(404).send({ error: 'Utilisateur non trouvé.' });
  }
  res.send(user.tasks);
});

module.exports = router;
