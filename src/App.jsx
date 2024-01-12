import { data } from 'autoprefixer'
import React from 'react'
import { useState } from 'react'

const App = () => {
  //to app 
  // 1. add something
  // 2. whatever we add it should be print 
  // 3. delete whatever we have created 
  // 4. update it will be optional
  const [todos, setSetTodos] =useState([])
  const [input, setInput] =useState("")
  const [updateIndex, setUpdateIndex] =useState("")

  //console.log("before add", todos)
  const handleAdd = ()=>{
    if(!updateIndex){
      if(input.trim()!==""){
    setSetTodos([...todos,input])
    setInput("")}
    else{
      alert("Don't Keep it empty")
    }
  }
  else{
    
    const updatedTodos = [...todos];
    updatedTodos[updateIndex-1] = input;
    {
      if(input){
        setSetTodos(updatedTodos)
        setUpdateIndex("")
        setInput("")
      }
      else{
        alert("Don't Keep update empty")
      }
    }
    
  }

  }
  // delete funcionality

  const handleDelete = (index)=>{
    setSetTodos(todos.filter((item, i)=> i !== index))
  }
const handleUpdate = (item,index)=>{
  setInput(item)
  setUpdateIndex(index+1)
  
}

  
  return (
    <div className='bg-slate-400 h-[100vh] flex justify-center py-20'>
      <div className='w-[400px] h-full rounded bg-slate-100 shadow-md '>
      <div className='flex gap-2 justify-center p-20'>
      <input 
      value={input}
      onChange={(e)=>setInput(e.target.value)}
      className='px-4 py-2 border rounded' type="text"   placeholder='add todo'/>
      
      <button 
      onClick={handleAdd}
      className='px-4 px-2 text-white bg-blue-500 rounded '>{updateIndex ? "Update" : "+Add"}</button>
      </div>
      <div className='px-20'>
      {
        todos.map((item, index)=>
        <div key={index} className="flex justify-between items-center">
        <h1 key={index}>{index+1}.{item}</h1>
        <div>
        <button 
        onClick={()=>handleDelete(index)}
        className='px-2 py-2 mt-2 bg-red-500 rounded text-white'>delete</button>
        <button 
        onClick={()=>handleUpdate(item,index)}
        className='px-2 py-2 mt-2 bg-orange-600 rounded text-white ml-2'>update</button>
</div>
        </div>
        )
      }
      </div>

      

      </div>


    </div>
  )
}

export default App