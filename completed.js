function FinishedTodo({index, remove, addTodo}){
    function handleChange() {
        console.log(index);
        addTodo(index, todo.text);
    }
    function handle(){
        console.log('Ping:',index);
        remove(index);
    }


    return ( 
        <div className="done" >
            <input
                type='checkbox'
                checked={todo.isCompleted}
                onChange={()=> handleChange(todo.index)}
            />
            {completedTodos.text} 
            <span class="material-symbols-outlined" onClick={handle}>delete</span>
        </div>
    )
}