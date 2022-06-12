import { useEffect, useState } from "react";

const TodoLists = () => {
  const [todos, setTodos] = useState([]);
  const getDataTodos = async() => {
    try {
      const getAllDataFromServer = await fetch('http://localhost:4000/rest/get-todos');
      const afterGetDataFromServer = await getAllDataFromServer.json()
    
      //update state
      setTodos(afterGetDataFromServer.todo_list);
    } catch (error) {
      console.log(error)
    }
  }

  const deleteTodo = async(id) => {
    try {
      await fetch(`http://localhost:4000/rest/delete-todos/${id}`, {
        method: 'DELETE',
      })
      window.location = '/';
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getDataTodos();
  }, [])
  return(
    <>
      {
        todos?.map(dsc => {
          return <div className="w-full lg:w-2/5  p-4 h-14 bg-[#262626] mt-9 rounded-xl mx-auto" key={dsc.todos_id}>
            <div className="flex flex-row">
              <h1 className="text-md flex-0 w-2/3 text-white">{dsc.description}</h1>
              <button className="flex-1 rounded-md  h-7 bg-[#61dafb] mr-2"><i className="fa-solid fa-edit"></i></button>
              <button className="flex-1 rounded-md h-7 bg-[#61dafb]" onClick={() => deleteTodo(dsc.todos_id)}><i className="fa-solid fa-trash"></i></button>
            </div>
          </div>
        })
      }
    </>
  )
}


export default TodoLists;