import { Request, Response } from "express";
import {sequelize} from '../instances/mysql'

export const home = async (req: Request, res: Response)=> {
    console.log('carrou o home')
    
    try {
        await sequelize.authenticate()
        console.log('Olá mundo')
    }catch(error) {
        console.log('Deu erro no seu app ai amigão', error)
    }


    res.render('pages/home', {

    })
}

