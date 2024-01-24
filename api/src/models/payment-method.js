module.exports = function (sequelize, DataTypes) {
  const PaymentMethods = sequelize.define('PaymentMethods', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    configuration: {
      type: DataTypes.JSON,
      allowNull: false
    },
    visible: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    createdAt: {
      type: DataTypes.DATE,
      get () {
        return this.getDataValue('createdAt')
          ? this.getDataValue('createdAt').toISOString().split('T')[0]
          : null
      }
    },
    updatedAt: {
      type: DataTypes.DATE,
      get () {
        return this.getDataValue('updatedAt')
          ? this.getDataValue('updatedAt').toISOString().split('T')[0]
          : null
      }
    }
  },
  {
    sequelize,
    tableName: 'payment_methods',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'id' }
        ]
      }
    ]
  })

  PaymentMethods.associate = function (models) {
    PaymentMethods.hasMany(models.ReturnError, { as: 'returnErrors', foreignKey: 'paymentMethodId' })
    PaymentMethods.hasMany(models.Return, { as: 'returns', foreignKey: 'paymentMethodId' })
    PaymentMethods.hasMany(models.SaleError, { as: 'saleErrors', foreignKey: 'paymentMethodId' })
    PaymentMethods.hasMany(models.Sale, { as: 'sales', foreignKey: 'paymentMethodId' })
  }

  return PaymentMethods
}
