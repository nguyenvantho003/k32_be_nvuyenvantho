import Users from "../models/UserModel";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const generateAccessToken = (user) => {
    return jwt.sign({...user}, process.env.ACCESS_TOKEN_SECRET_KEY, {
        expiresIn: '1d'
    })
}


const register = asnyc (req, res) => {
    const { email, password } = req.body
    if ()
}