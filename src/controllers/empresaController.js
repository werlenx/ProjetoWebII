import empresas from "../models/empresa.js"

class EmpresasController {

  static listarEmpresas = (req, res) =>{
    empresas.find((err, empresas)=>{
      res.status(200).json(empresas)
    })
  }

  static listarEmpresasPorId = (req, res) =>{
    const id = req.params.id
    empresas.findById(id, (err, empresas)=>{
      if(err){
        res.status(400).send({message: `${err.message} - Id da empresa`})
      }
    })
  }

  static cadastrarEmpresas = (req, res) =>{
    let empresa = new empresas(req, res)
    empresa.save((err)=>{
      if(err){
        res.status(500).send({message: `${err.message} - falha ao cadastrar empresa`})
      }else{
        res.status(201).send(empresa.json())
      }
    })
  }

  static atualizarEmpresa = (req, res) => {
    const id = req.params.id

    empresas.findByIdAndUpdate(id, {$set: req.body}, (err)=>{
      if(!err){
        res.status(200).send({message: "Empresa Atualizada"})
      }else{
        res.status(500).send({message: err.message})
      }
    })
  }

  static excluirEmpresa = (req, res) => {
    const id = req.params.id
    empresas.findByIdAndDelete(id, (err, res) => {
      if(!err){
        res.status(200).send({message: "Empresa removida"})
      }else{
        res.status(500).send({message: err.message})
      }
    })
  }
}

export default EmpresasController