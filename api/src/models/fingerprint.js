module.exports = function (sequelize, DataTypes) {
  const Fingerprint = sequelize.define('Fingerprint', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    
    fingerprint: {
      type: DataTypes.STRING,
      allowNull: false
    },
    browser: {
      type: DataTypes.STRING,
      allowNull: false
    },
    browserVersion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    os: {
      type: DataTypes.STRING,
      allowNull: false
    },
    osVersion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    screenHeight: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    screenWidth: {
      type: DataTypes.INTEGER,
      allowNull: false
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
  }, {
    sequelize,
    tableName: 'fingerprints',
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

  Fingerprint.associate = function (models) {

  }

  return Fingerprint
}
