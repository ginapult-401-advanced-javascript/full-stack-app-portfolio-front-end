import React, { useState, useEffect } from 'react';
// using lifecycle methods to fetch with useEffect
// using useState to 
import PropTypes from 'prop-types';
import todoActions from '../../src/store/actions/todos.js';
import { connect } from 'net';

const Todos = (props) => {
// getters and setters for two different inputs titles and content
const [todoTitle, setTodoTitle] = useState('');
const [todoContent, setTodoContent] = useState('');

  function handleSubmit (event) {
    event.preventDefault();
    
  }

  // useEffect used to fetch
  useEffect(() => {
    props.fetchTodos();
  }, []);

  return (
    <>
      <ul>
        {/* jsx here */}
        {props.todos.map((todo, idx) => (
          <li key={idx}>
            <p>{todo.title}</p>
            <p>{todo.content}</p>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
        
        />
      </form>
    </>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  fetchTodos: () => dispatch(todoActions.fetchTodos),
});

Todos.propTypes = {
  fetchTodos: PropTypes.func,
  todos: PropTypes.array,
};

// export curried function to take in whole component as an argument
export default connect(mapStateToProps, mapDispatchToProps)(Todos)
