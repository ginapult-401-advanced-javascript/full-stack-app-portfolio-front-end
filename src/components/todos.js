import React, { useState, useEffect } from 'react';
// using lifecycle methods to fetch with useEffect and useState too 
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import todoActions from '../../src/store/actions/todos.js';

const Todos = (props) => {
// getters and setters for two different inputs titles and content
const [todoTitle, setTodoTitle] = useState('');
const [todoContent, setTodoContent] = useState('');

  function handleSubmit (event) {
    event.preventDefault();
    props.addTodos({ title: todoTitle, content: todoContent });    
  }

  // useEffect used to fetch
  useEffect(() => {
    props.fetchTodos();
  }, []);

  return (
    <>
      <ul>
        {props.todos.map((todo, idx) => (
          <li key={idx}>
            <p>{todo.title}</p>
            <p>{todo.content}</p>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder="Todo Title"
        value={todoTitle}
        onChange={(event) => setTodoTitle(event.target.value)}
        />
        <input
        type="text"
        placeholder="Todo Content"
        value={todoContent}
        onChange={(event) => setTodoContent(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  fetchTodos: () => dispatch(todoActions.fetchTodos()),
  addTodos: (data) => dispatch(todoActions.addTodos(data)),
});

Todos.propTypes = {
  fetchTodos: PropTypes.func,
  addTodos: PropTypes.func,
  todos: PropTypes.array,
};

// export curried function to take in whole component as an argument
export default connect(
  mapStateToProps,
  mapDispatchToProps,
  )(Todos);
