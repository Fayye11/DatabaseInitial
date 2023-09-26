import { Model, DataTypes } from "sequelize";
import { sequelizeMySQL } from '../instances/mysql';


interface UserInstance extends Model {
    id: number,
    name: string,
    age: number
}
export const UserMySQL = sequelizeMySQL.define<UserInstance>("User", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    lastname: {
        type: DataTypes.STRING
    },
    fullname: {
        type: DataTypes.VIRTUAL,
        get() {
            let name: string = this.getDataValue('name')
            let lastname: string = this.getDataValue('lastname')
            return `${name} ${lastname}`
        }
    },
    name: {
        type: DataTypes.STRING,
        get() {   //esse get vai entrar no meio do processo de pegar informação
            const raw =  this.getDataValue('name')  //esse comando vai pegar os dados raiz, como foi colocado name, vai retornar todos os nomes colocados
            return raw.toUpperCase()   //esse comando vai pegar o nome dos usuarios e botar em capslock
        }
    },
    age: {
        type:  DataTypes.INTEGER,
        defaultValue: 18,
        set(value: number) {
            if(value < 18) {
                value = 18
            }
            this.setDataValue('age', value)
        }
    }
},
{
    tableName: 'users',
    timestamps: false
})

