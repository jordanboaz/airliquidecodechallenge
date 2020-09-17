const submitTasks = async () => {
  const setTimeoutPromise = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };
  await setTimeoutPromise(2000);
  return {status: 200};
};

export {submitTasks};
