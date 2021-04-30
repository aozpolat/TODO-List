import { useState, createContext, useContext, useEffect } from "react";

export const Context = createContext();
export const useList = () => useContext(Context);
export default function TodoContext(props) {
  const [list, setList] = useState();
  const [filteredList, setFilteredList] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setFilteredList(
      list.filter((item) => {
        return item.text.toLowerCase().includes(search.toLowerCase());
      })
    );
  }, [list, search, setFilteredList]);

  const addItem = (input) => {
    setList([
      ...list,
      { text: input, isComplete: false, id: Math.random() * 10000 },
    ]);
  };

  const eventDone = (item) => {
    setList(
      list.map((element) => {
        if (element.id === item.id) {
          item.isComplete = !item.isComplete;
        }
        return element;
      })
    );
  };

  const deleteItem = (item) => {
    setList(
      list.filter((element) => {
        return element.id !== item.id;
      })
    );
  };

  return (
    <Context.Provider
      value={{
        deleteItem: deleteItem,
        addItem: addItem,
        setSearch: setSearch,
        list: list,
        filteredList: filteredList,
        eventDone: eventDone,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
