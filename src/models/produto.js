import mongoose from "mongoose";

const produtoSchema = new mongoose.Schema(
  {
    id: { type: String},
    nome: { type: String, required: true},
    fabricante: { type: String, required: true},
    preco: { type: Number, required: true}
  },
  {
    versionKey: false
  }
)

const produtos = mongoose.model("produto", produtoSchema)
export default produtos