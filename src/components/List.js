import ListItem from "./ListItem";
import { useList } from "../contexts/TodoContext";

export default function List() {
  const { filteredList } = useList();
  return (
    <div className="list">
      {filteredList.map((item, index) => (
        <ListItem key={index} item={item} />
      ))}
    </div>
  );
}
