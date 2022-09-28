//import DoneTodo from './done.js';

function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'learn react',
      isCompleted: false,
    },
    {
      text: 'meet friend for lunch',
      isCompleted: false,
    },
    {
      text: 'build todo app',
      isCompleted: false,
    }         
  ]);
  const [completedTodos, setCompletedTodos] = React.useState([
    {
      text: 'clean room',
      isCompleted: true,
    },
    {
      text: 'cook',
      isCompleted: true,
    }
  ]);
  const [todoEditing, setTodoEditing] = React.useState(null);

  const addTodo = text => {
    const newTodos = [...todos, {text, isCompleted:false}];
    setTodos(newTodos); // these two lines can only be done on this page because of dependencies
    console.log(todos);
  }
  const removeTodo = index => {
    let temp = [...todos];    
    temp.splice(index, 1);
    setTodos(temp); 
  }
  // this takes the index that is passed
  // geet a handle on the current todos
  // temp list will spice, remove at the index and just one, and then pass the temp to the newState to update the new list
  function editTodo(index, editingText){
    let updatedTodos = [...todos].map((todo) => {
      todo[index].text = editingText;
      return todos;
    })
    setTodos(updatedTodos);
    setTodoEditing(null);

    console.log(todos);
  }
 
  const completeTodo = (index, text) => {
    // this adds newDone to completedTodos list
    let newDone = [...completedTodos, {text, isCompleted:true}];
    setCompletedTodos(newDone);
    console.log(completedTodos);
    // This removes newDone from todos
    let temp = [...todos]; 
    temp.splice(index, 1);
    setTodos(temp);
    console.log(todos);
  }
  // First it gets spliced out of todos, then pushed into a completedTodos
  const removeDoneTodo = index => {
    let temp = [...completedTodos];    
    temp.splice(index, 1);
    setCompletedTodos(temp); 
  }
  const reAddTodo = (index, text) => {
    let newTodos = [...todos, {text, isCompleted:false}];
    setTodos(newTodos); // these two lines can only be done on this page because of dependencies
    let temp = [...completedTodos]; 
    temp.splice(index, 1);
    setCompletedTodos(temp);
  }
  


  return(
    <div className="app">

      <div className="todo-list" >
        {todos.map((todo, i) => (
          <Todo key={i} index={i} completed={completeTodo} todo={todo} editTodo={editTodo} remove={removeTodo}/>
        ))}
        <TodoForm addTodo={addTodo}/>
      </div>

      
      <div>
        <h2>All Done</h2>
        <div className="todo-list" key={completedTodos.index}>
          {completedTodos.map((completedTodo, index)=> (
            <div className="todo">
              <input
                type='checkbox'
                checked={completedTodo.isCompleted}
                onChange={()=> reAddTodo(index, completedTodo.text)}
              />
              <div className="todo-text all-done">
                {completedTodo.text}
              </div>
              <div>
                <span className="material-symbols-outlined" onClick={removeDoneTodo}>delete</span>
              </div>
            </div>
          ))}
        </div>
      </div>


      
      
    </div>
  ); 
}
// at the Todo tag, remove={removeTodo} will call the function removeTodo
// the stuff in the {} are all the todos listed out, it has the index, the todo, and a little remove thingy
// after it there is a little form to add a new todo

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);


{/* <div>
<h2>All Done</h2>
<div>
  {completedTodos.map((completedTodo, i)=> (
    <DoneTodo index={i} completedTodo={completedTodo} addTodo={addTodo} remove={removeTodo}/>
  ))}
</div>
</div> */}