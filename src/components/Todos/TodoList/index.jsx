import React from "react";
import { connect } from "react-redux";
import NoData from "../../NoData";
import NewTodoForm from "../NewTodoForm";
import TodoListItem from "../TodoListItem";
import { removeTodo } from "../../../store/actions";
import "./styles.css";

const TodoList = ({ todos, onRemovePressed }) => {
  return (
    <div className="list-wrapper">
      <NewTodoForm />

      <div className="list__container">
        {!!todos.length ? (
          todos.map((todo, idx) => (
            <TodoListItem
              key={`${todo.text}-${idx}`}
              todo={todo}
              onRemovePressed={onRemovePressed}
            />
          ))
        ) : (
          <NoData message="No todos yet, add one" />
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ todos }) => ({
  todos,
});

const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (text) => dispatch(removeTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
