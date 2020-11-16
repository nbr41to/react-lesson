import React from 'react'
import Checkbox from "@material-ui/core/Checkbox"
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Card from '@material-ui/core/Card';

const Item = ({ task, toggleCheckbox, deleteTodo }) => {
  return (
    <li className={`margin ${task.checked ? 'checked' : ''}`}>
      <Card>
        <Checkbox
          color="primary"
          checked={task.checked}
          onClick={() => toggleCheckbox(task.id)}
        // onChange={handleChange}
        />
        {task.todo}
        <IconButton aria-label="delete" onClick={() => deleteTodo(task.id)}>
          <DeleteIcon />
        </IconButton>
      </Card>
    </li>
  )
}

export default Item
