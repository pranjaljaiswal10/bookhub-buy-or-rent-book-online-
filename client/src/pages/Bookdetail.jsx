import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"
import { api } from "../utils/apiclient"

const Bookdetail = () => {
  const {id}=useParams()
  const [bookdetails,setBookdetails]=useState(null)
  const [loading,setLoading]=useState(false)
  useEffect(()=>{
    async function getDetails(){
      try {
        setLoading(true)
       const response=await api.get(`/books/${id}`) 
       const data=response.data
       setBookdetails(data)
      } catch (error) {
        console.log(error)
      }finally{
        setLoading(false)
      }
    }
   getDetails()
  },[id])
  return (
    <div>{
      }
    </div>
  )
}

export default Bookdetail