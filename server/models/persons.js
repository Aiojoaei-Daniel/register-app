module.exports = (sequelize, DataType) => {
  let model = sequelize.define(
    "Persons",
    {
      firstName: {
        type: DataType.TEXT,
      },
      lastName: {
        type: DataType.TEXT,
      },
      personalId: {
        type: DataType.TEXT,
      },
      age: {
        type: DataType.INTEGER,
      },
      cars: {
        type: DataType.TEXT,
      },
    },
    {
      timestamps: true,
    }
  );

  return model;
};
