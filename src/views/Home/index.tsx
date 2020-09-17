import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {getTodos} from '../../services/todoService';
import {submitTasks} from '../../services/checklistService';
import {useDispatch, useSelector} from 'react-redux';
import {
  submitTodosRequest,
  toggleTodo,
  addTodoRequest,
} from '../../store/todos/actions';

const Home = () => {
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    fetchList();
  }, []);

  const dispatch = useDispatch();

  const fetchList = async () => {
    const data = await getTodos();
    data.map((each) => dispatch(addTodoRequest(each)));
  };

  console.log('on selector', todos);
  return (
    <View>
      {todos.map((todo) => (
        <Text
          key={todo.name}
          onPress={() => {
            console.log(todo);
            if (todo.status !== 'sent') {
              dispatch(toggleTodo(todo.name));
            }
          }}>
          {todo.name}
        </Text>
      ))}
      <TouchableOpacity
        onPress={() => {
          dispatch(submitTodosRequest());
        }}>
        <Text>Button</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
