import { useEffect } from "react"
import {useParams} from "react-router-dom"
import { api } from "../utils/apiclient"

const Bookdetail = () => {
  const {id}=useParams()
  async function getDetails() {
    const response=await api.get('/')
  }
  useEffect(()=>{
   getDetails()
  },[])
  return (
    <div>Bookdetail</div>
  )
}

export default Bookdetail