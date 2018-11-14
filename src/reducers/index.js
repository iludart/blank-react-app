import { combineReducers } from 'redux'
import todos from './todos'
import todoInput from './todoInput'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  todos,
  todoInput,
  visibilityFilter,
})