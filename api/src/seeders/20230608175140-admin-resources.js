'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('admin_resources', [
      {
        id: 1,
        resourceId: 1,
        element: "form",
        structure: JSON.stringify(
          {
            tabs: {
              main: {
                label: 'Principal'
              }
            },
  
            tabsContent: {
              main: {
                rows: {
                  row1: {
                    formElements: {
                      id: {
                        element: 'input',
                        type: 'hidden'
                      },
                      menu: {
                        label: 'Añadir al menú',
                        element: 'select',
                        required: true,
                        options: [
                          { value: true, label: 'Sí' },
                          { value: false, label: 'No' }
                        ]
                      },
                      interface: {
                        label: 'Crear panel de administración',
                        element: 'select',
                        required: true,
                        options: [
                          { value: true, label: 'Sí' },
                          { value: false, label: 'No' }
                        ]
                      },
                      name: {
                        label: 'Nombre del recurso',
                        element: 'input',
                        type: 'text',
                        placeholder: 'Nombre que tendrá el recurso',
                        validate: ['required']
                      },
                      tableName: {
                        label: 'Nombre de la tabla',
                        element: 'input',
                        type: 'text',
                        placeholder: 'Nombre que tendrá en el menú',
                        validate: ['required']
                      }
                    }
                  },
                  row2: {
                    formElements: {
                      tableDefinition: {
                        label: 'Descripción de la tabla',
                        element: 'textarea',
                        validate: ['required'],
                        placeholder: 'Ej: La tabla tendrá los campos: id, workerId, name (not null), email (unique notnull). Indices en email y en la clave foranea',
                      },
                      modelDefinition: {
                        label: 'Descripción del modelo',
                        element: 'textarea',
                        validate: ['required'],
                        placeholder: 'Ej: Añade la relación de hasMany con menuItems y de belongsToMany con LocaleSeo y LocaleSeoSlug a través de MenuItem.',
                      }
                    }
                  },
                  row3: {
                    formElements: {
                      adminResourcesForm: {
                        name: 'adminResources',
                        url: '/admin/admin-resources',
                        element: 'subform'
                      },
                      adminResourcesTable: {
                        name: 'adminResources',
                        url: '/admin/admin-resources',
                        element: 'subtable'
                      }
                    }
                  }
                }
              }
            }
          }
        ),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        resourceId: 1,
        element: "table",
        structure: JSON.stringify(
          {
            headers: {
              name: {
                label: "Nombre del recurso"
              },
              tableName: {
                label: "Nombre de la tabla"
              },
            },
            buttons: {
              edit: true,
              remove: true
            }
          }
        ),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        resourceId: 1,
        element: "filter",
        structure: JSON.stringify(
          {
            tabs: {
              filter: {
                label: "Filtros de búsqueda"
              },
              openAI: {
                label: "OpenAI"
              }
            },
            tabsContent: {
              filter: {
                rows: {
                  row1: {
                    formElements: {
                      name: {
                        label: "Nombre del recurso",
                        element: "input",
                        type: "text",
                        placeholder: "",
                      },
                      tableName: {
                        label: "Nombre de la tabla",
                        element: "input",
                        type: "text",
                        placeholder: ""
                      }
                    }
                  }
                }
              },
              openAI: {
                rows: {
                  row1: {
                    formElements: {
                      prompt: {
                        label: "¿Qué datos quieres ver?",
                        element: "textarea"
                      }
                    }
                  }
                }
              }
            }
          }
        ),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        resourceId: 2,
        element: "form",
        structure: JSON.stringify(
          {
            tabs: {
              main: {
                label: 'Nuevo elemento de Administración'
              }
            },
  
            tabsContent: {
              main: {
                rows: {
                  row1: {
                    formElements: {
                      id: {
                        element: 'input',
                        type: 'hidden'
                      },
                      resourceId: {
                        element: 'input',
                        type: 'hidden'
                      },
                      element: {
                        label: 'Elemento',
                        element: 'select',
                        required: true,
                        options: [
                          { value: 'form', label: 'Formulario' },
                          { value: 'table', label: 'Tabla' },
                          { value: 'filter', label: 'Filtro' }
                        ]
                      }
                    }
                  },
                  row2: {
                    formElements: {
                      structure: {
                        label: 'Estructura',
                        element: 'textarea',
                        required: true
                      }
                    }
                  }
                }
              }
            }
          }
        ),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        resourceId: 2,
        element: "table",
        structure: JSON.stringify(
          {
            headers: {
              element: {
                label: "Elemento"
              }
            },
            buttons: {
              edit: true,
              remove: true
            }
          }
        ),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        resourceId: 3,
        element: "form",
        structure: JSON.stringify(
          {
            tabs: {
              main: {
                label: 'Principal'
              }
            },
  
            tabsContent: {
              main: {
                rows: {
                  row1: {
                    formElements: {
                      id: {
                        element: 'input',
                        type: 'hidden'
                      },
                      name: {
                        label: 'Nombre del menu',
                        element: 'input',
                        type: 'text',
                        placeholder: 'Nombre que tendrá el recurso',
                        validate: ['required']
                      }
                    }
                  },
                  row2: {
                    formElements: {
                      menuItemsForm: {
                        name: 'menuItems',
                        url: '/admin/menu-items',
                        element: 'subform'
                      },
                      menuItemsTable: {
                        name: 'menuItems',
                        url: '/admin/menu-items',
                        element: 'subtable'
                      }
                    }
                  }
                }
              }
            }
          }
        ),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        resourceId: 3,
        element: "table",
        structure: JSON.stringify(
          {
            headers: {
              name: {
                label: "Nombre del menu"
              }
            },
            buttons: {
              edit: true,
              remove: true
            }
          }
        ),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        resourceId: 3,
        element: "filter",
        structure: JSON.stringify(
          {
            tabs: {
              filter: {
                label: "Filtros de búsqueda"
              },
              openAI: {
                label: "OpenAI"
              }
            },
            tabsContent: {
              filter: {
                rows: {
                  row1: {
                    formElements: {
                      name: {
                        label: "Nombre del recurso",
                        element: "input",
                        type: "text",
                        placeholder: "",
                      }
                    }
                  }
                }
              },
              openAI: {
                rows: {
                  row1: {
                    formElements: {
                      prompt: {
                        label: "¿Qué datos quieres ver?",
                        element: "textarea"
                      }
                    }
                  }
                }
              }
            }
          }
        ),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 9,
        resourceId: 4,
        element: "form",
        structure: JSON.stringify(
          {
            tabs: {
              main: {
                label: 'Nuevo enlace del Menú'
              }
            },
  
            tabsContent: {
              main: {
                rows: {
                  row1: {
                    formElements: {
                      id: {
                        element: 'input',
                        type: 'hidden'
                      },
                    }
                  },
                  row2: {
                    formElements: {
                      menuId: {
                        element: 'input',
                        type: 'hidden'
                      },
                    }
                  },
                  row3: {
                    formElements: {
                      name: {
                        label: "Nombre del recurso",
                        element: "input",
                        type: "text",
                        placeholder: ""
                      },
                    }
                  },
                  row4: {
                    formElements: {
                      private: {
                        label: 'Visible solo para usuarios administradores',
                        element: 'select',
                        required: true,
                        options: [
                          { value: true, label: 'Sí' },
                          { value: false, label: 'No' }
                        ]
                      }
                    }
                  },
                  row5: {
                    formElements: {
                      description: {
                        label: 'Texto descriptivo del enlace',
                        element: "input",
                        type: "text",
                        placeholder: "",
                      },
                    }
                  },
                  row6: {
                    formElements: {
                      link: {
                        label: 'Tipo de enlace',
                        element: 'select',
                        required: true,
                        options: [
                          { value: 'customUrl', label: 'Enlace personalizado' },
                          { value: 'localeSeoId', label: 'Enlace estático' },
                          { value: 'localeSlugSeoId', label: 'Enlace dinámico' }
                        ]
                      }
                    }
                  }
                }
              }
            }
          }
        ),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 10,
        resourceId: 4,
        element: "table",
        structure: JSON.stringify(
          {
            headers: {
              name: {
                label: "Nombre del enlace"
              }
            },
            buttons: {
              edit: true,
              remove: true
            }
          }
        ),
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('admin_resources', null, {});
  }
};
