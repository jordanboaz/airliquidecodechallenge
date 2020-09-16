const getTodos = async () => {
  try {
    const data = await (
      await fetch('https://my.api.mockaroo.com/items?key=52d6c330')
    ).json();

    return data;
  } catch (error) {
    //TODO handle error
    console.error(error);
  }
};

export {getTodos};
