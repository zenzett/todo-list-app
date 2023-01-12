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
      <div className="px-10">
        <p className="m-10 flex justify-center font-extrabold text-6xl">
          TO DO LIST
        </p>

        <div className="border-4 rounded-2xl w-full flex flex-col px-40 py-10 shadow-xl">
          <p className="pb-2 w-full font-semibold text-xl">Add a task</p>
          <Input
            id="input-task"
            value={inputTask}
            onChange={(e) => setInputTask(e.target.value)}
          />
          <div className="py-5 px-4">{inputTask}</div>
          <Button label="Add Task" onClick={() => handleAddTask()} />
        </div>
        <div className="border-4 rounded-2xl w-full flex flex-col my-10 px-40 py-10 shadow-xl">
          <p className="border-b-4 border-b-slate-900 py-5 w-full font-semibold text-xl">
            My tasks
          </p>
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="w-full flex justify-between py-5 border-b-2 items-center"
            >
              <p className="text-lg lg:w-[44em]">{todo.task}</p>
              <div className="grid grid-cols-2 gap-3">
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
