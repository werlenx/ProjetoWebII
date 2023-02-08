import mongoose from 'mongoose'

mongoose.connect('mongodb+srv://werlen:123@cluster0.sq2zy0t.mongodb.net/')

let db = mongoose.connection

export default db