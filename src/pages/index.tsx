import { useState, useEffect } from "react";
import axios from "axios";

import { Button, EditButton, DeleteButton } from "components/Button";
import Layout from "components/Layout";
import { Input } from "components/Input";

interface TodoType {
  id: number;
  task: string;
  done: boolean;
}

const Index = () => {
  const [trigger, setTrigger] = useState<boolean>(false);
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [inputTask, setInputTask] = useState<string>("");

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    axios
      .get("https://api.todoist.com/rest/v2/tasks", {
        headers: {
          Authorization: "Bearer 12f40642aaab7229106d356bf9645e4b3ff1d423",
        },
      })
      .then((res) => {
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleAddTask() {
    const newData = {
      id: todos.length,
      task: inputTask,
      done: false,
    };
    if (inputTask === "") {
      alert("Fill the form first!");
    } else {
      const dupeTodos = todos.slice();
      dupeTodos.push(newData);
      setTodos(dupeTodos);
      setInputTask("");
    }
  }

  function handleEditTask() {}

  function handleDeleteTask(todo: TodoType) {}

  return (
    <Layout>
      <div className="px-5 lg:px-20">
        <p className="m-5 text-3xl flex justify-center font-extrabold lg:text-6xl lg:m-10">
          TO DO LIST
        </p>

        <div className="border-4 px-5 py-5 rounded-2xl w-full flex flex-col shadow-xl lg:px-20 lg:pt-10">
          <p className="mb-2 w-full font-semibold lg:text-xl">Add a task</p>
          <Input
            id="input-task"
            value={inputTask}
            onChange={(e) => setInputTask(e.target.value)}
          />
          <div className="mt-3 flex justify-end">
            <Button label="Submit" onClick={() => handleAddTask()} />
          </div>
        </div>
        <div className="border-4 my-10 px-5 py-8 rounded-2xl w-full flex flex-col shadow-xl lg:px-20 lg:pt-10">
          <p className="border-b-2 border-slate-500 flex justify-center pb-7 w-full text-lg font-semibold lg:text-xl">
            My Tasks
          </p>
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="w-full flex justify-between py-4 border-b-2 items-center lg:py-3"
            >
              <p className="lg:text-lg w-full">{todo.task}</p>
              <div className="w-fit grid grid-cols-2 gap-4 md:mx-2">
                <EditButton label="Edit" onClick={() => handleEditTask()} />
                <DeleteButton
                  label="Delete"
                  onClick={() => handleDeleteTask(todo)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Index;
