const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("pokemon", {
    id: {
        type: DataTypes.INTEGER,
        unique: true,
        primaryKey: true,
        allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING,
    },
  },{ timestamps: false,
    });
};

