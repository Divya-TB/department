"use strict";

module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        "employee",
        {
            
            name: { type: DataTypes.STRING, allowNull: false},
            email: { type: DataTypes.STRING, allowNull: false },
            phone: { type: DataTypes.BIGINT, allowNull: false },
            job: {type: DataTypes.STRING, allowNull: false},
            status: { type: DataTypes.INTEGER, allowNull: true },
            created_on: { type: DataTypes.STRING, allowNull: true },

        },
        {
            tableName: "employee",
            createdAt: true,
            updatedAt: true,
            underscored: true,
            timestamps: false,
        }
    );
};