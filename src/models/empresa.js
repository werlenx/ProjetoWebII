import mongoose, { Mongoose } from "mongoose";

const empresaSchema = new mongoose.Schema(
  {
    id: { type: String},
    nome: { type: String},
    endereco: { type: String}
  },
  {
    versionKey: false
  }
)

const empresas = mongoose.model('empresas', empresaSchema)

export default empresas