import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import styled from "styled-components";

import * as todoActions from "./actions/todos";

const Title = styled.h1`
  color: palevioletred;
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  font-size: 35px;
  color: palevioletred;
  margin-left: 10px;

  &:focus {
    outline-color: transparent;
  }
`;

const Input = styled.input`
  height: 25px;
  padding: 5px;
  border: 1px solid #d9d9d9;
  width: 250px;

  &:focus {
    border-color: #40a9ff;
    box-shadow: 0 0 4px 2px rgba(24, 144, 255, 0.2);
  }
`;

const ListItem = styled.li`
  display: flex;
  font-size: 18px;
  color: #595b5c;
  margin-bottom: 5px;
`;

const Wrapper = styled.div`
  width: 45%;
  padding: 30px;
  margin: 0 auto;
  display: block;
  text-align: center;
  border: 1px solid palevioletred;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

class TodoList extends Component {
  state = {
    newTodoText: ""
  };

  addNewTodo = () => {
    this.props.addTodo(this.state.newTodoText);
    this.setState({ newTodoText: "" });
  };

  render() {
    return (
      <Wrapper>
        <Title>To do List</Title>
        <InputWrapper>
          <Input
            type="text"
            value={this.state.newTodoText}
            onChange={event =>
              this.setState({ newTodoText: event.target.value })
            }
          />
          <Button onClick={this.addNewTodo}>+</Button>
        </InputWrapper>
        <ul>
          {this.props.todos.map(todo => (
            <ListItem key={todo.id}>{todo.text}</ListItem>
          ))}
        </ul>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(todoActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
