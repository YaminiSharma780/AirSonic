'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    
    // console.log("Creating Flights table...");
    // const airportsTable = await queryInterface.describeTable('Airports');
    // console.log("Airports table columns: ", airportsTable);
    
    await queryInterface.createTable('Flights', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      flightNumber: {
        type: Sequelize.STRING,
        allowNull: false
      },
      airplaneId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Airplanes',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      arrivalAirportId: {
        type: Sequelize.STRING,
        // type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Airports',
          key: 'code'
        },
        onDelete: 'CASCADE'
      },
      departureAirportId: {
        type: Sequelize.STRING,
        // type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Airports',
          key: 'code'
        },
        onDelete: 'CASCADE'
      },
      arrivalTime: {
        type: Sequelize.DATE,
        allowNull: false
      },
      departureTime: {
        type: Sequelize.DATE,
        allowNull: false
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      boardingGate: {
        type: Sequelize.STRING
      },
      totalSeats: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Flights');
  }
};