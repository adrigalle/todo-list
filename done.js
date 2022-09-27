function DoneTodo({index, remove, addTodo, completedTodo}){
    function handleChange() {
        console.log(index);
        addTodo(index, completedTodo.text);
    }
    function handle(){
        console.log('Ping:',index);
        remove(index);
    }


    return (
        <div>
            <input
                type='checkbox'
                checked={completedTodo.isCompleted}
                onChange={()=> handleChange(completedTodo.index)}
            />

            {completedTodo.text} 

            <span class="material-symbols-outlined" onClick={handle}>delete</span>
        </div>
    )
}