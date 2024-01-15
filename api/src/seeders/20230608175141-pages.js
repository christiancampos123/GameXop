'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('admin_pages', [
      {
        id: 1,
        title: "Generador de recursos API",
        description: "Generador de recursos API automatizados",
        url: "/admin/resources",
        structure: JSON.stringify(
          {
            page: {
              body: {
                style: {
                  backgroundColor: '#2a4cbb',
                  display: 'flex',
                  flexDirection: 'column',
                  margin: '0 auto',
                  minHeight: '100vh',
                  width: '100%',
                  fontFamily: 'Arial, sans-serif'
                }
              },
              header : {
                style: {
                  alignItems: 'center',
                  backgroundColor: '#2a4cbb',
                  display: 'flex',
                  height: '10vh',
                  paddingBottom: '0.5em',
                  padding: '0.5em 5%',
                  width: '90%',
                },
                rows: {
                  row1: {
                    style: {
                      alignItems: 'center',
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      width: '100%',
                    },
                    components: {
                      logo: {
                        name: 'logo-component',
                        title: 'OnePage'
                      },
                      pageTitle: {
                        name: 'page-title-component',
                        title: 'Generador de recursos'
                      },
                      menu: {
                        name: 'menu-component',
                        menu: 'admin-header'
                      }
                    }
                  }
                }
              },
              main: {
                style: {
                  width: '100%'
                },
                rows: {
                  row1: {
                    style: {
                      width: '100%',
                    },
                    components: {
                      overlayerComponent: {
                        name: 'overlayer-component',
                      },
                      deleteElementModalComponent: {
                        name: 'delete-element-modal-component',
                      },
                      alertMessageComponent: {
                        name: 'alert-message-component',
                      },
                      crudComponent:{
                        name: 'crud-component',
                        url: '/admin/resources',
                      }
                    },
                  }
                }
              },
              footer: {
                style: {
                }
              }
            },
          }
        ),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        title: "Generador de menus",
        description: "Generador de menus",
        url: "/admin/menus",
        structure: JSON.stringify(
          {
            page: {
              body: {
                style: {
                  backgroundColor: '#2a4cbb',
                  display: 'flex',
                  flexDirection: 'column',
                  margin: '0 auto',
                  minHeight: '100vh',
                  width: '100%',
                  fontFamily: 'Arial, sans-serif'
                }
              },
              header : {
                style: {
                  alignItems: 'center',
                  backgroundColor: '#2a4cbb',
                  display: 'flex',
                  flexDirection: 'row',
                  height: '10vh',
                  justifyContent: 'space-between',
                  paddingBottom: '0.5em',
                  padding: '0.5em 5%',
                  width: '90%',
                },
                rows: {
                  row1: {
                    style: {
                      alignItems: 'center',
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      width: '100%',
                    },
                    components: {
                      logo: {
                        name: 'logo-component',
                        title: 'OnePage'
                      },
                      pageTitle: {
                        name: 'page-title-component',
                        title: 'Menús'
                      },
                      menu: {
                        name: 'menu-component',
                        menu: 'admin-header'
                      }
                    }
                  }
                }
              },
              main: {
                style: {
                  width: '100%'
                },
                rows: {
                  row1: {
                    style: {
                      width: '100%',
                    },
                    components: {
                      overlayerComponent: {
                        name: 'overlayer-component',
                      },
                      deleteElementModalComponent: {
                        name: 'delete-element-modal-component',
                      },
                      alertMessageComponent: {
                        name: 'alert-message-component',
                      },
                      crudComponent:{
                        name: 'crud-component',
                        url: '/admin/menus',
                      }
                    },
                  }
                }
              },
              footer: {
                style: {
                }
              }
            },
          }
        ),
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('pages', null, {});
  }
};
