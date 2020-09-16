import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {getTodos} from '../../services/todoService';
const Home = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetchList();
  }, []);

  const fetchList = async () => {
    const data = await getTodos();
    setTodos(data);
  };

  return (
    <View>
      {todos.map((todo) => (
        <Text key={todo.name}>{todo.name}</Text>
      ))}
    </View>
  );
};

export default Home;
