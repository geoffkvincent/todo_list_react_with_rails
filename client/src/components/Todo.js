import React from 'react';

const Todo = ({ id, complete, name, updateItem, deleteItem }) => (
  <div className="col s12">
    <div className="col m8">
      <div style={complete ? styles.complete : {}} className="center">
        {name}
      </div>
    </div>
    <div className="col m2">
      <label>
        <input
          id={`item-${id}`}
          type="checkbox"
          defaultChecked={complete}
          onClick={() => updateItem(id)}
        />
        <span>Complete?</span>
      </label>
    </div>
    <div style={styles.pointer} className="col m1" onClick={() => deleteItem(id)}>
      X
    </div>
  </div>
)

const styles = {
  complete: {
    textDecoration: 'line-through',
    color: 'grey'
  },
  pointer: { cursor: 'pointer' }
}

export default Todo;