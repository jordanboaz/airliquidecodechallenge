const submitTasks = async (todos) => {
  const setTimeoutPromise = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };
  await setTimeoutPromise(1000);

  return todos.map((todo) => {
    return todo.name;
  });
};

export {submitTasks};
