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
    name: {
        type: DataTypes.STRING
    },
    age: {
        type:  DataTypes.INTEGER,
        defaultValue: 18,
    }
},
{
    tableName: 'users',
    timestamps: false
})

