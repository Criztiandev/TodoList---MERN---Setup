import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { completeTodo, deleteTodo, updateTodo } from "../redux/features/TodoSlice/todoSlice";

function TodoCard({ title , id, isCompleted}) {
  const [updateData, setUpdateData] = useState(title);
  const [isUpdate, setIsUpdate] = useState(false);

  const dispatch = useDispatch()

    function toggleUpdate(){
        dispatch(updateTodo({id: id , title: updateData}))
        setIsUpdate(!isUpdate)
    }

    function toggleDeleteTodo(){
        dispatch(deleteTodo({id: id}))
    }

    function toggleComplete(){
        dispatch(completeTodo({id: id, isCompleted: !isCompleted}))
    }

  return (
    <div className=" flex justify-between items-center w-[500px] px-4">
        {isUpdate ?  
            <input type="text" className="border border-black" value={updateData} onChange={(e) => setUpdateData(e.target.value)} />
            :
                <h1>{title}</h1>
        }

      <div className="">
        {isUpdate ? 
             <button className="border border-black px-2" onClick={toggleUpdate}>
             Update
           </button>
         : 
          <button
            className="border border-black px-2" onClick={() => setIsUpdate(!isUpdate)} >
            Edit
          </button>
        }
        <button className="border border-black px-2" onClick={toggleComplete}>Complete</button>
        <button className="border border-black px-2" onClick={toggleDeleteTodo}>Delete</button>
      </div>
    </div>
  );
}

export default TodoCard;
