import React from 'react';
import axios from 'axios';

const Todo = () => {
    const [value,setValue] = React.useState("");
    const [data,setData] = React.useState([]);
    const handleSubmit = (e)=>{
        e.preventDefault()
        const payload = {
            id: Math.random(),
            title: value,
            status: false
        }
        axios.post("http://localhost:8080/todos",payload).then(setData([...data,payload]));
        setValue("")
    }
    const handleDelete = (id)=>{
      axios.delete(`http://localhost:8080/todos/${id}`)
      let ndata = data.filter((el)=>id!==el.id);
      setData([...ndata])
    }
    const getData = ()=>{
      axios.get("http://localhost:8080/todos").then(({data})=>setData(data))
    }
    const handleToggle = (id)=>{
      data.map((el)=>{
        el.id==id?el.status=!el.status:el
       

      }
      
      );
      setData([...data])
    }
    React.useEffect(()=>{
      getData()
    },[])
  return (
    <div >
      <h3>Todos</h3>
      <p>Total Todo: {data.length}</p>
      <form onSubmit={handleSubmit}>
          <input className="input" value={value} onChange={(e)=>setValue(e.target.value)} type="text" />
          <input className="button" type="submit" value="Add Todo" />
      </form>
      <div className="todo-list">
        {data.map((el)=>{
          return <div className='items' key={el.id}>
              <input className="toggle-btn" type="checkbox" onClick={()=>handleToggle(el.id)} />
            <h4 className="heading"  style={ el.status ? { color:"red", textDecoration:"line-through"} : {color:"blue"} } >{el.title}</h4>
            <p>Status: {el.status? "True" : "false"}</p>
            <button className='delete-todo' onClick={()=>handleDelete(el.id)}>Delete</button>
          </div>
        })}
      </div>
    </div>
  )
}

export default Todo