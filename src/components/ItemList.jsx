import React from 'react'
import Item from './Item'

const ItemList = ({ todos, toggleCheckbox, deleteTodo }) => {
  return (
    <ul style={{ listStyle: 'none' }}>
      {todos.map((task, index) => {
        return (
          <Item
            key={index}
            task={task}
            toggleCheckbox={toggleCheckbox}
            deleteTodo={deleteTodo}
          />
        )
      })}
      {!todos.length && <p>私は自由の身だ！</p>}
    </ul>
  )
}

export default ItemList
