import { useRef } from "react";

import { useList } from "../contexts/TodoContext";

export default function Form() {
  const inputRef = useRef();

  const { addItem, list, setSearch } = useList();

  const searchHandler = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="form">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (!inputRef.current.value) return;
          addItem(inputRef.current.value);
          inputRef.current.value = "";
        }}
      >
        {list.length > 10 ? (
          <input
            className="search"
            onChange={searchHandler}
            type="text"
            placeholder="search"
          />
        ) : null}

        <input
          className="input"
          ref={inputRef}
          type="text"
          name="name"
          placeholder="Add something to list"
        />
        <input className="submit" type="submit" value="Add" />
      </form>
    </div>
  );
}
