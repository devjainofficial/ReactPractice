import React from "react";
import { useState } from "react";

function Add({onAddTodo}) {
  const [title, setTitle] = useState("");
  return (
    <>
      <input
        type="text"
        placeholder="Add Tasks"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={()=>{
        setTitle('');
        onAddTodo(title);
      }}>Add</button>
    </>
  );
}

export default Add;
