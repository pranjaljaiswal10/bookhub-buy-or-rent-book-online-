import { useState } from "react";
import { api } from "../utils/apiclient";
import { validateData } from "../utils/helper.js";

const Auth = () => {
  const [userdetail, setUserdetail] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [loading,setLoading]=useState(false)
  const [errorMessage,setErrorMessage]=useState(null)
  const isValid=validateData(userdetail)
  setErrorMessage(isValid)
  const handleSubmit = async (e) => {
    try {     
      const res=await api.post(`/user/register`,userdetail)
       const data=res.data
       console.log(data)
    } catch (error) {
      setErrorMessage(error.message)
    }
  e.prevetDefault()
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="bg-gray-00 px-16 py-12 w-xl">
        <span>signin</span>
        <span>signup</span>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">username</label>
            <input
              type="text"
              placeholder="Enter your username"
              id="username"
              value={userdetail.username}
              className="w-full border border-gray-300"
              onChange={(e) => setUserdetail({ [e.target.id]: e.target.value })}
            />
            {errorMessage.username &&(<p>{errorMessage?.username}</p>)}
          </div>
          <div>
            <label htmlFor="email">email</label>
            <input
              type="text"
              placeholder="Enter your email"
              id="email"
              value={userdetail.email}
              className="w-full border border-gray-300"
              onChange={(e) => setUserdetail({ [e.target.id]: e.target.value })}
            />
            {errorMessage.email &&(<p>{errorMessage?.email}</p>)}
          </div>
          <div>
            <label htmlFor="password">password</label>
            <input
              type="text"
              placeholder="Create a password"
              id="password"
              value={userdetail.password}
              className="w-full border border-gray-300"
              onChange={(e) => setUserdetail({ [e.target.id]: e.target.value })}
            />
          </div>
          <div>
            <input type="radio" id="seller" />
            <label htmlFor="seller">seller</label>
          </div>
          <div>
            <input type="radio" id="buyer" />
            <label htmlFor="buyer">buyer</label>
          </div>
          <button type="submit">Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
