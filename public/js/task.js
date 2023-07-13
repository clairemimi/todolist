const express = require('express');
const { resolve } = require('path');

const app = express();
const { todolist } = require('./data/db.json');
const { writeFileSync } = require('fs');

function createTask(text, category, userId) {
  // Crée un objet représentant la nouvelle tâche
  const newTask = {
    id: generateTaskId(), // Générer un identifiant unique pour la tâche
    text: text,
    category: category,
    isdone: false,
    userId: userId,
  };
  // Ajouter la nouvelle tâche à votre source de données
  tasks.push(newTask);

  return newTask;
}

const newTask = createTask(
  'Text de la tâche',
  'Catégorie de la tâche',
  'la tâche isdone/gone',
  'la tâche faire par un utilisateur '
);
console.log('Nouvelle tâche créée :', newTask);

// Modifier une tâche
function updateTask(taskId, updatedTask) {
  // Recherche la tâche dans votre source de données
  const taskIndex = tasks.findIndex((task) => task.id === taskId);
  if (taskIndex !== -1) {
    tasks[taskIndex] = { ...tasks[taskIndex], ...updatedTask };
    return tasks[taskIndex];
  }
  return null;
}

// Supprimer une tâche
function deleteTask(taskId) {
  // Recherche la tâche dans votre source de données
  const taskIndex = tasks.findIndex((task) => task.id === taskId);
  if (taskIndex !== -1) {
    const deletedTask = tasks.splice(taskIndex, 1)[0];
    return deletedTask;
  }
  return null;
}
