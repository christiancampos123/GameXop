module.exports = function (sequelize, DataTypes) {
  const Resource = sequelize.define('Resource', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tableName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tableDefinition: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'resources',
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
      },
      {
        name: 'resource_url_unique',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'url' }
        ]
      }
    ]
  })

  Resource.associate = function (models) {
    Resource.hasMany(models.AdminResource, {
      foreignKey: 'resourceId',
      as: 'adminResources'
    })
  }

  return Resource
}
