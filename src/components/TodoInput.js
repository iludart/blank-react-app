import React from 'react'
import PropTypes from 'prop-types'

const TodoInput = ({ todoInput, onChange, onSubmit }) => (
  <form
    onSubmit={onSubmit}>
    <input value={todoInput} onChange={onChange} />
    <button type="submit">Add Todo</button>
  </form>
)

TodoInput.propTypes = {
  todoInput: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export default TodoInput