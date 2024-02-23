import {useState} from 'react'
import './App.css';

//simple way using array, the issue is that if 2 tasks have the same name they are both deleted
// function App() {
//   const [todoList, setTodoList]=useState([]);
//   const [newTask, setNewTask]=useState("");

//   const handleInput=(event)=>{
//     setNewTask(event.target.value);
//   }

//   const addTask = ()=>{
//     const newTodoList = [...todoList, newTask];
//     setTodoList(newTodoList)
//   }

//  const deleteTask = (taskName)=>{
//   setTodoList(todoList.filter((task)=>{
//     if(task===taskName){
//       return false
//     }
//     else {
//       return true
//     }
//   }))}

//   return (
//     <div className="App">
  
//      <div className="add Task">
//       <input className="txt field"placeholder='Type Your Task' onChange={handleInput}/>
//       <button onClick={addTask}>Add Task</button>
//      </div>
  
//      <div className="list tasks">

//       {todoList.map((task) =>{
//         return (
        
//         <div>
//           <h2>{task}</h2>
//           <button onClick={ ()=> deleteTask(task)}>X</button>
//         </div>
        
//         )})}
     
//      </div>
//     </div>
//   );
// }


function App() {
  const [todoList, setTodoList]=useState([]);
  const [newTask, setNewTask]=useState("");

  const handleInput=(event)=>{
    setNewTask(event.target.value);
  }

  const addTask = ()=>{
    const task = {
      id: todoList.length===0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed:false
    }

    const newTodoList = [...todoList, task];
    setTodoList(newTodoList)
  }

 const deleteTask = (id)=>{
  setTodoList(todoList.filter((task)=>task.id !== id))
}

const completeTask = (id)=>{
  setTodoList(
    todoList.map((task)=>{
      if(task.id===id){
        return {...task, completed:true}
      } else{
        return task;
      }
    })
    )
}

return (
    <div className="App">
  
     <div className="addTask">
      <input className="txt field"placeholder='Type Your Task' onChange={handleInput}/>
      <button onClick={addTask}>Add Task</button>
     </div>
  
     <div className="list">
      {todoList.map((task) =>{
        return (
        
        <div className='task'
        style={{backgroundColor: task.completed ? "green " : "white"}}
        >
          <h2>{task.taskName}</h2>
          <button onClick={ ()=> deleteTask(task.id)}>X</button>
          <button onClick={ ()=> completeTask(task.id)}>Complete</button>
        </div>
        
        )})}
     
     </div>
    </div>
  );
}

export default App;
