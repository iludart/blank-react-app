const todoInput = (state = "", action) => {
  console.log(action)
  switch (action.type) {
    case 'SET_TODO_INPUT':
      return action.todoInput
    default:
      return state
  }
}

export default todoInput