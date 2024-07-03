import mongoose from "mongoose";

const UseSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    role: {
        type: String,
        default: "user" 
    }
})

const User = mongoose.model('Users', UserSchema )
export default Users