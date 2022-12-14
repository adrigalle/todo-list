function Todo({todo,index,remove,editTodo, completed}){
  function handle(){
    console.log('Ping:',index);
    remove(index);
  }

  function handleComplete(){
    console.log(index);
    completed(index, todo.text);
  }
  const [todoEditing, setTodoEditing] = React.useState(null);
  const [editingText, setEditingText] = React.useState("");

  function handleEdit(index, editingText){
    console.log("edit mode activated");
    console.log(index);
    console.log(editingText);
    editTodo(index, editingText);
    setTodoEditing(null);
    setEditingText("");
    console.log("edit mode complete");
  }
 

  return (
    <div className="todo" >
      <input 
        type='checkbox' 
        onChange={()=> handleComplete(todo.index)} 
        checked={todo.isCompleted}
      />

      <div className="todo-text">
        {todoEditing === todo.index ? 
        (<input type="text" onChange={(e) => setEditingText(e.target.value)} value={editingText}/>) : 
        <div key={index.toString()}>{todo.text}</div>}
      </div>

      <div className="edit-delete">
        {todoEditing === todo.index ? 
          (<span className="material-symbols-outlined" onClick={() => handleEdit(index, editingText)}>
          publish
          </span>) : 
          (<span className="material-symbols-outlined" onClick={() => setTodoEditing(todo.index, todo.text)}>
          edit
          </span>
        )}

        <span className="material-symbols-outlined" onClick={handle}>delete</span>
      </div>

    </div> 
  )
} 
 
