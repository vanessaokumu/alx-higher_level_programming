#!/usr/bin/node

const request = require('request');

// API URL for JSONPlaceholder
const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

// Make a GET request to fetch the todo data
request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    // Parse the response body as JSON
    const todos = JSON.parse(body);

    // Create a map to store the count of completed tasks for each user
    const userTaskCountMap = new Map();

    // Iterate through the todos to count completed tasks for each user
    todos.forEach((todo) => {
      if (todo.completed) {
        const userId = todo.userId;
        if (userTaskCountMap.has(userId)) {
          userTaskCountMap.set(userId, userTaskCountMap.get(userId) + 1);
        } else {
          userTaskCountMap.set(userId, 1);
        }
      }
    });

    // Print the user IDs and the number of completed tasks
    userTaskCountMap.forEach((count, userId) => {
      console.log(`User ID ${userId}: Completed ${count} tasks`);
    });
  }
});
