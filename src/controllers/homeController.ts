import { Request, Response } from "express";
import {sequelizeMySQL} from '../instances/mysql'
import {sequelizePostGree} from '../instances/pg'
import {UserMySQL} from '../models/Users'
import { UserPostGree } from "../models/UsersPostGree";


export const home = async (req: Request, res: Response)=> {
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
    let usersMySQL = await UserMySQL.findAll()
    console.log("USUARIOS:", JSON.stringify(usersMySQL))



    res.render('pages/home', {
        usersMySQL
    })
}

