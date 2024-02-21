// TaskForm.js
import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';

function TaskForm({ onAddTask }) {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName.trim()) return; // Check if task name is empty
    onAddTask(taskName.trim());
    setTaskName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <TextField
            label="Task Name"
            variant="outlined"
            size="small"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </Grid>
        <Grid item>
          <Button type="submit" variant="contained">Add Task</Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default TaskForm;
