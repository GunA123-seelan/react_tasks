import {useState} from 'react';

function App() {
  const title="Todo Task Assign";
  const [task,setTask]=useState("");
  const [stat,setStat]=useState(false);
  const [tasklist,setTasklist]=useState([]);

  const add_task=(e)=>{

    console.log("add task..");
    if(task){
      const store_item = {id:generateId(),tasks:task};
      console.log("store",store_item);
      const tempArr = [...tasklist,store_item];
      console.log("tempArr",tempArr);
      setTasklist(tempArr);
      setTask("");
      setStat(false);
    }else{
      setStat(true);
    }
  }
  const deleteTask=(id)=>{
    setTasklist(tasklist.filter((item)=>item.id !== id));
  }

  function generateId(){
    console.log("task-list",tasklist);
    let newId=0;
    if(tasklist.length == 0){
      newId=1;
    }else{
      newId=tasklist.length+1;
    }
    return newId;
  }
  return (
    <div className="container">
      <div className="input-fields">  
        <h3>{title}</h3>
        <input type="text" placeholder="Add Data" value={task} onChange={(e)=>setTask(e.currentTarget.value)}/>
        {stat && <b><i style={{"color":"red"}}>Please Add Some Task..</i></b>}
        <button onClick={add_task}>Click Add !</button>
      </div>

      <div className="my-lists">
      <ul className="ul-type">
        {
          tasklist.length ? tasklist.map((item)=>(<li key={item.id} onClick={()=>deleteTask(item.id)}>{item.tasks} </li>))
          : "No Data"
        }
      </ul>
      </div>
    </div>
  ); 
}

export default App;