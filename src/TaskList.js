// TaskList.js
import React from 'react';
import { Typography, Grid, Button, Divider,Box } from '@mui/material';

function TaskList({ tasks, onTaskClick, onTaskDelete }) {
  return (
    <>
      {tasks.map(task => (
        <React.Fragment key={task.id}>
          <Grid container justifyContent="space-between">
            <Grid item>
              <Typography
                style={{ textDecoration: task.completed ? 'line-through' : 'none',color: task.completed ? 'grey':'inherit' }}
                onClick={() => onTaskClick(task.id)}
              >
                {task.text}
              </Typography>
            </Grid>
            <Grid item>
              <Button variant="contained" onClick={() => onTaskDelete(task.id)}>Delete</Button>
            </Grid>
          </Grid>
            <Box my={2}>
                <Divider />
            </Box>
          
        </React.Fragment>
      ))}
    </>
  );
}

export default TaskList;
