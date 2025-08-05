import jwt from "jsonwebtoken"

const authVerify = async (req, res, next) => {
  try {
    const token = req.cookies.toke || req.header("Authrization")?.replace("Bearer", "")
    if (!token) {
      res.status(400).jon({ message: "Invalid access token", success: false })
    }
    const decode = jwt.verify(token, process.env.JWT_SECRET_KEY)
    req.user_id = decode.id
    next()
  } catch (error) {
    console.log(error)
    next(error)
  }
}

const roleVerify = (role) => async (req, res, next) => {
  try {
    if (req.user?.role !== role) {
      res.status(403).json({ message: "You are not autorized to access", success: false })
    }
    next()
  } catch (error) {
    console.log(error)
    next(error)
  }
}

export { authVerify, roleVerify }