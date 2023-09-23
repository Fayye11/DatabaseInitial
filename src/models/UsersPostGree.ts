import {Model, DataTypes} from 'sequelize'
import { sequelizePostGree } from '../instances/pg'

interface TypePostGree extends Model {
    id: number,
    name: string,
    age: number
}
export const UserPostGree = sequelizePostGree.define<TypePostGree>('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING
    },
    age: {
        type: DataTypes.INTEGER
    }
},
{
    tableName: 'tabelinha',
    timestamps: false

})