import {ServicioCelda} from '../services/ServicioCelda.js'

export class ControladorCelda{

    constructor(){}

    async buscar(request,response){

        let servicioCelda = new ServicioCelda()

        try{
            response.status(200).json({
                mensaje:'exito en la consulta',
                data: await servicioCelda.buscar()
            })

        }catch(error){
            response.status(400).json({
                mensaje:'fallamos en la consulta'+error,
                data:null
            })

        }
    }

    async buscarCelda(request,response){

        let servicioCelda = new ServicioCelda()

        try{
            let id=request.params.id
            response.status(200).json({
                mensaje:'exito buscando la celda',
                data: await servicioCelda.buscarPorId(id)
            })

        }catch(error){
            response.status(400).json({
                mensaje:'fallamos buscando la celda'+error,
                data:null
            })

        }
    }

    async editarCelda(request,response){

        let servicioCelda = new ServicioCelda()

        try{
            let id = request.params.id
            let datos= request.body
            await servicioCelda.editar(id,datos)
            response.status(200).json({
                mensaje:'exito editando la celda',
                data:null
            })

        }catch(error){
            response.status(400).json({
                mensaje:'fallamos editando la celda'+error,
                data:null
            })
        }
    }

    async agregarCelda(request,response){

        let servicioCelda = new ServicioCelda()

        try{
            let datos = request.body
            await servicioCelda.ingresar(datos)
            response.status(200).json({
                mensaje:'exito agregando celda',
                data:null
            })

        }catch(error){
            response.status(400).json({
                mensaje:'falla agregando celda'+error,
                data:null
            })

        }
    }
}