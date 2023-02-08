import produto from "../models/produto.js"

class ProdutosController {

  static listarProdutos = (req, res) =>{
    produtos.find((err, produtos)=>{
      res.status(200).json(produtos)
    })
  }

  static listarProdutosPorId = (req, res) =>{
    const id = req.params.id
    produtos.findById(id, (err, produtos)=>{
      if(err){
        res.status(400).send({message: `${err.message} - Id da produto`})
      }
    })
  }

  static cadastrarProdutos = (req, res) =>{
    let produto = new produtos(req, res)
    produto.save((err)=>{
      if(err){
        res.status(500).send({message: `${err.message} - falha ao cadastrar produto`})
      }else{
        res.status(201).send(empresa.json())
      }
    })
  }

  static atualizarProdutos = (req, res) => {
    const id = req.params.id

    produtos.findByIdAndUpdate(id, {$set: req.body}, (err)=>{
      if(!err){
        res.status(200).send({message: "produto Atualizado"})
      }else{
        res.status(500).send({message: err.message})
      }
    })
  }

  static excluirProdutos = (req, res) => {
    const id = req.params.id
    produtos.findByIdAndDelete(id, (err, res) => {
      if(!err){
        res.status(200).send({message: "produto removida"})
      }else{
        res.status(500).send({message: err.message})
      }
    })
  }
}

export default EmpresaController