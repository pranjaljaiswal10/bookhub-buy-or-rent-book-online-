import { Sparkles } from "lucide-react"
import { sidebarLinks } from "../utils/constant"
import {Link} from "react-router-dom"

const Sidebar = () => {
  return (
    <div>
     <h1><Sparkles/> LitLoop</h1>   
    <div>
      {sidebarLinks.map((item)=>(
        <Link to={item.href}>{item.title}</Link>
      ))}
    </div>
    <button>sign Out</button>
    </div>
  )
}

export default Sidebar