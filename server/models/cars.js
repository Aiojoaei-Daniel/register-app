module.exports = (sequelize, DataType) => {
  let model = sequelize.define(
    "Cars",
    {
      brand: {
        type: DataType.TEXT,
      },
      model: {
        type: DataType.TEXT,
      },
      productionYear: {
        type: DataType.INTEGER,
      },
      cc: {
        type: DataType.INTEGER,
      },
      tax: {
        type: DataType.INTEGER,
      },
    },
    {
      timestamps: true,
    }
  );

  return model;
};
