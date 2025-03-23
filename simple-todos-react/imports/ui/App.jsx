import React from 'react';

const tasks = [
  {_id: 1, text: 'Test 1'},
  {_id: 2, text: 'Test 2'},
  {_id: 3, text: 'Test 3'},
];
export const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>

    <ul>
      { tasks.map(task => <Task key={ task._id } task={ task }/>) }
    </ul>
  </div>
);
