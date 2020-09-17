import React, {useEffect} from 'react';
import {getTodos} from '../../services/todoService';
import {useDispatch} from 'react-redux';
import {useSelector} from '../../store';
import {
  submitTodosRequest,
  toggleTodo,
  addTodoRequest,
} from '../../store/todos/actions';
import {Container, Content, Button, ButtonText} from './style';
import Checkbox from '../../components/Checkbox';

const Home = () => {
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    fetchList();
  }, []);

  const dispatch = useDispatch();

  const fetchList = async () => {
    const data = await getTodos();
    data.map((each: string) => dispatch(addTodoRequest(each)));
  };

  console.log('on selector', todos);

  const onPressCheckbox = (todo) => {
    console.log(todo);
    if (todo.status !== 'sent') {
      dispatch(toggleTodo(todo.name));
    }
  };

  return (
    <Container>
      <Content>
        {todos.map((todo) => (
          <Checkbox
            key={todo.name}
            name={todo.name}
            checked={todo.status === 'checked'}
            completed={todo.status === 'sent'}
            onPress={() => onPressCheckbox(todo)}
          />
        ))}
      </Content>

      <Button
        onPress={() => {
          dispatch(submitTodosRequest());
        }}>
        <ButtonText>Enviar</ButtonText>
      </Button>
    </Container>
  );
};

export default Home;
