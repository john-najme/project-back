import {Table, Column, DataType, Model} from 'sequelize-typescript';
import * as trace_events from "node:trace_events";

@Table({ //decoradores --
    tableName: 'budgets',
    timestamps: true,
    underscored: true,
})
class Budget extends Model{
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    })
    id_budget!: number;

    @Column({
        type: DataType.STRING(100),
        allowNull: false,
    })
    name!: string;

    @Column({
        type: DataType.FLOAT,
        allowNull: false,
    })
    amount!: number;
}
export default Budget;