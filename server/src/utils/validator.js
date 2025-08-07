import { validationResult } from "express-validator"


export const validator = (req, res, next) => {
  const errors = validationResult(req)
  if (errors.isEmpty()) {
    return next()
  }
  const extractedError = []
  errors.array().map((err) => extractedError.push({ [err.path]: err.msg }))
}
