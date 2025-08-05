import {create} from "zustand"
import { api } from "../utils/apiclient"


const useAuthStore=create((set)=>({
    user:null,
    loading:false,
    error:null,
    fetchUser:async () => {
        set({loading:true,error:null})
    try {
        const res=await api.get('/users/login');
        set({user:res.data,loading:false})
    } catch (err) {
        set({error:err.message,loading:false})
    }
    }
}))

export default useAuthStore