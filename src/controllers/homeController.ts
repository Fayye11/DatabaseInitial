import { Request, Response } from "express";
import {sequelizeMySQL} from '../instances/mysql'
import {sequelizePostGree} from '../instances/pg'
import {UserMySQL} from '../models/Users'
import { UserPostGree } from "../models/UsersPostGree";
import { Op } from "sequelize";


export const home = async (req: Request, res: Response)=> {
    //testando Metodo Setter
   // await UserMySQL.create({
   //     name: 'caua',
   //     age: 15
    //})
    

    



    
        //simple UPDATE queries

    //  await UserMySQL.update({name: 'caua', age: 178 }, {
   //     where: {
  //        id: 1031
 //       }
//      });
      //1. DADOS A SEREM ALTERADOS
      //2. CONDIÇÃO PARA ENCONTAR O(s) ITEM(ns)





    //POSTGRESQL
   // try {
  //      await sequelizePostGree.authenticate()
  //      console.log('deu certo')
 ////   }catch(error) {
 //       console.log('deu erro ai no seu bagulho carai')
  //  }
 //   //MYSQL
 //   try {
 //       await sequelizeMySQL.authenticate()
  //      console.log('Olá mundo')
  //  }catch(error) {
  //      console.log('Deu erro no seu app ai amigão', error)
 //   }
//

    let usersMySQL = await UserMySQL.findAll({
        where: {
            age: {
                [Op.gte]: 1
            }
        },
        order: [
            ['age', 'ASC'],
            ['name', 'DESC']
        ],
    });

//let usersMySQL = UserMySQL.build({name: 'fulano', age: 25})
//await usersMySQL.save()
//let usersMySQL = UserMySQL.create({name: 'ciclanooo', age: 3})


    res.render('pages/home', {
       usersMySQL
    })
}
export const newUser = async (req: Request, res: Response)=> {

    let {name, age} = req.body

    if(name) {
        let CreateUser = UserMySQL.build({ name })
        if(age) {
            CreateUser.age = parseInt(age)
        }
    await CreateUser.save()
    }
    res.redirect('/')
}
export const addIdade = async (req: Request, res: Response)=> {
    console.log('resultado:', req.params.id)
    let id: string = req.params.id

    let results = await UserMySQL.findAll({where: {id} })
    if(results.length > 0) {
        let usuario = results[0]
        usuario.age++
        await usuario.save()
    }
    res.redirect('/')


}
export const diminuirIdade = async (req: Request, res: Response)=> {
    console.log('resultado:', req.params.id)
    let id: string = req.params.id

    let results = await UserMySQL.findAll({where: {id} })
    if(results.length >= 0) {
        let usuario = results[0]
        usuario.age--
        await usuario.save()
    }
    res.redirect('/')


}
export const deletarIdade = async (req: Request, res: Response)=> {

    let id: string = req.params.id
    await UserMySQL.destroy({where: {id}})
    

    res.redirect('/')
}