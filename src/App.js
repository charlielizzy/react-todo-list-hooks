import ToDoList from "./components/ToDoList";
import React, { useEffect, useState } from "react";

function App() {
  // const list = [
  //   { userId: 1, id: 1, title: "delectus aut autem", completed: false },
  //   { userId: 1, id: 2, title: "quis ut nam facilis et officia qui", completed: false },
  //   { userId: 1, id: 3, title: "fugiat veniam minus", completed: false },
  //   { userId: 1, id: 4, title: "et porro tempora", completed: true }
  // ];

  const [tasks, setTasks] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      setTasks(data);
      // console.log(data);
    } catch (error) {
      return <h1>Oops there is an error: {error}</h1>;
    }
  };

  console.log(tasks);

  return (
    <div className="max-w-2xl mx-auto">
      <div className="p-4">
        <h1 className="text-5xl text-center mb-6">TODO LIST</h1>
        {/* <ToDoList data={tasks} /> */}
      </div>
    </div>
  );
}

export default App;
