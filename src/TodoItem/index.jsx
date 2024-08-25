import { GiCheckMark } from "react-icons/gi";
import { LuTrash } from "react-icons/lu";
import "./TodoItem.css";
function TodoItem({ text, completed, onComplete, onDelete }) {
  return (
    <li className="todoItem">
      <span
        className={`Icon Icon-check ${completed && "Icon-check--active"}`}
        onClick={onComplete}
      >
        <GiCheckMark />
      </span>
      <p className={`todoItem-p ${completed && "todoItem-p--complete"}`}>
        {text}
      </p>
      <span className="Icon Icon-delete" onClick={onDelete}>
        <LuTrash />
      </span>
    </li>
  );
}

export { TodoItem };
