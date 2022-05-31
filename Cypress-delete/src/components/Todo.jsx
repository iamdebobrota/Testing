import React from 'react';
import axios from 'axios';

const Todo = () => {
    const [value,setValue] = React.useState("");
    const [data,setD] = React.useState([]);
    const handleSubmit = (e)=>{
        e.preventDefault()
        const payload = {
            id: Math.random(),
            title: value,
            status: false
        }
        axios.post("http://localhost:8080/todos",payload).then(setD([...data,payload]));
        setValue("")
    }
    const handleDelete = (id)=>{
      axios.delete(`http://localhost:8080/todos/${id}`)
      let ndata = data.filter((el)=>id!==el.id);
      setD([...ndata])
    }
    const getData = ()=>{
      axios.get("http://localhost:8080/todos").then(({data})=>setD(data))
    }

    React.useEffect(()=>{
      getData()
    },[])
  return (
    <div >
      <h3>Todos</h3>
      <p>Total data:{data.length}</p>
      <form onSubmit={handleSubmit}>
          <input className="input_bx" value={value}
           onChange={(e)=>setValue(e.target.value)} type="text" />
          <input className="add" type="submit" value="Add" />
      </form>
      <div className="todo-list">
        {data.map((el)=>{
          return <div className='items' key={el.id}>
            <h4 className="heading">{el.title}-{el.status?"Done":"Not Done"}</h4>
            <button className='delete-todo' onClick={()=>handleDelete(el.id)}>Delete</button>
          </div>
        })}
      </div>
    </div>
  )
}

export default Todo