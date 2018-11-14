import { connect } from 'react-redux'
import { addTodo, setTodoInput } from '../actions'
import TodoInput from '../components/TodoInput'

const handleSubmit = (dispatch, event) => {
  if (event) {
    event.preventDefault();
  }

  const value = event.target[0].value;
  if (value) {
    dispatch(addTodo(value.trim()));
    dispatch(setTodoInput(""));
  }
}

const mapStateToProps = (state) => ({
  todoInput: state.todoInput
})

const mapDispatchToProps = (dispatch) => ({
  onChange: e => dispatch(setTodoInput(e.target.value)),
  onSubmit: e => handleSubmit(dispatch, e)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoInput)