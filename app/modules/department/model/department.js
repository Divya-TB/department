"use strict";

module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        "department",
        {
            
            depno: { type: DataTypes.INTEGER, allowNull: false},
            head_id: {type: DataTypes.INTEGER, allowNull: false},
            assistant_id: {type: DataTypes.INTEGER, allowNull: false},
            status: { type: DataTypes.INTEGER, allowNull: true },
            created_on: { type: DataTypes.STRING, allowNull: true },

        },
        {
            tableName: "department",
            createdAt: true,
            updatedAt: true,
            underscored: true,
            timestamps: false,
        }
    );
};