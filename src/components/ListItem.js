import React from "react";
import { useList } from "../contexts/TodoContext";

export default function ListItem({ item }) {
  const { eventDone, deleteItem } = useList();
  return (
    <div className="listItem">
      <li className={item.isComplete ? "completed" : "text"}>{item.text}</li>
      <button className="done" onClick={() => eventDone(item)}>
        Done
      </button>
      <button className="delete" onClick={() => deleteItem(item)}>
        Delete
      </button>
    </div>
  );
}
