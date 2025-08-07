

export const validateData = (userdetail) => {
   const {username,email,password}=userdetail
   const error = {}
   if (username.length < 3 || username.length < 15) {
      error["username"] = "username must be atleast three character"
   }
   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
   if (!emailRegex.test(email)) {
      error["email"] = "Please enter a valid emails"
   }
   const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
   if (!passwordRegex.test(password)) {
      error["password"] = "Password must be atleast one uppercase,lowecase and on number and eight character"
   }
   return Object.keys(error).length>0?error:null;
}