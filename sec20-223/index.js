const myAsyncFunc = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await res.json();

  console.log(data);
};

myAsyncFunc();

// this is logged to the console before the data.
console.log("test");
