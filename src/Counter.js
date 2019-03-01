import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const Text = styled.p`
  text-align: center;
  text-transform: uppercase;
  color: #595b5c;
`;

const Counter = props => <Text>Você tem {props.todos.length} todos.</Text>;

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps)(Counter);
