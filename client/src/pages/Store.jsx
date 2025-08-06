import { useEffect, useState } from "react"
import { api } from "../utils/apiclient"


const Store = () => {
  const [allBooks,setAllBooks]=useState([])
  async function getAllbook() {
    const response=await api.get("/books")
    const data=response.data()
    setAllBooks(data)
  }
  useEffect(()=>{
  getAllbook()
  },[])
  return (
    <div className="flex">
     {
      allBooks.map((item)=>(
        <div key={item.id}>
        
        </div>
      ))
     }   
    </div>
  )
}

export default Store