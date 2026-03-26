import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../features/todo/todoSlice';

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [editId, setEditId] = useState(null);
  const [updatedText, setUpdatedText] = useState('');

  const handleEdit = (todo) => {
    setEditId(todo.id);
    setUpdatedText(todo.text);
  }

  const handleSave = (id) => {
    dispatch(updateTodo({ id, text: updatedText }));
    setEditId(null);
    setUpdatedText('');
  }

  return (
    <>
      <div>Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
  key={todo.id}
  className="mt-4 flex items-center bg-zinc-800 px-4 py-2 rounded"
>
  <input
    className={` flex-1 text-white bg-zinc-800 border-0 focus:outline-none ${editId === todo.id ? '' : 'cursor-not-allowed'}`}
    value={editId === todo.id ? updatedText : todo.text}
    readOnly={editId !== todo.id}
    onChange={(e) => setUpdatedText(e.target.value)}
  />

  {/* Buttons container */}
  <div className="flex gap-2 ml-auto">
    {editId === todo.id ? (
      <button
        onClick={() => handleSave(todo.id)}
        className="text-white bg-green-500 px-3 py-1 rounded"
      >
        Save
      </button>
    ) : (
      <button
        onClick={() => handleEdit(todo)}
        className="text-white bg-blue-500 px-3 py-1 rounded"
      >
        Edit
      </button>
    )}

    <button
      onClick={() => dispatch(removeTodo(todo.id))}
      className="text-white bg-red-500 px-3 py-1 rounded"
    >
      Delete
    </button>
  </div>
</li>
        ))}
      </ul>
    </>
  );
}

export default Todos;