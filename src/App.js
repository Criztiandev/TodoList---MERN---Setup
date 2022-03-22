import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoCard from "./Component/TodoCard";
import { addTodo, updateTodo } from "./redux/features/TodoSlice/todoSlice";

function App() {
  const todoList = useSelector((state) => state.todos.value);
  const dispatch = useDispatch();

  const [inputData, setInputData] = useState("");

  function handleInput(e) {
    setInputData(e.target.value);
  }

  function handleAddTodo(){
    dispatch(addTodo({title: inputData}))
  }

  return (
    <div className="min-h-screen flex justify-center items-center">
      <main className="container h-64 max-h-[50%] border border-black flex justify-between items-center flex-col">
        <section>
          {todoList.map((item) => {
            return <TodoCard key={item.id} title={item.title} id = {item.id} isCompleted = {item.isCompleted} />;
          })}
        </section>
        <section className="">
          <input
            type="text"
            value={inputData}
            onChange={handleInput}
            className="border border-black rounded-sm"
          />
          <button onClick={handleAddTodo}>Add</button>
        </section>
      </main>
    </div>
  );
}

export default App;
