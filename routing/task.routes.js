const router = require('express').Router();
const tasksFilePath = require('../controllers/task.Ctrl');
const fs = require('fs');
const path = require('path');
const tasksFilePath = path.join(__dirname, 'db.json');

// Créer une nouvelle tâche pour un utilisateur spécifique
router.post('/users/:userId/task', async (req, res) => {
  try {
    const userId = req.params.userId;
    const task = {
      id: generateTaskId(), // Générez un identifiant unique pour la tâche
      title: req.body.title,
      description: req.body.description,
      category: req.body.category,
      done: false,
      userId: userId,
    };

    const tasks = readTaskFile(); // Lire les tâches existantes à partir du fichier JSON
    tasks.push(task); // Ajouter la nouvelle tâche au tableau des tâches
    tasks.writeTask(tasks); // Écrire les tâches mises à jour dans le fichier JSON

    res.status(201).send(task);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Fonction pour lire les tâches à partir du fichier JSON
function readTaskFile() {
  return new Promise((resolve, reject) => {
    fs.readFile(tasksFilePath, 'utf8', (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(JSON.parse(data));
      }
    });
  });
}

// Fonction pour écrire les tâches dans le fichier JSON
function writeTaskFile(tasks) {
  return new Promise((resolve, reject) => {
    fs.writeFile(tasksFilePath, JSON.stringify(tasks), 'utf8', (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
}
