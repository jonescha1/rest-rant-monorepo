"use strict";
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        first_name: "chase",
        last_name: "jones",
        email: "admin@admin.com",
        role: "admin",
        password_digest: await bcrypt.hash(process.env.ADMIN_PASSWORD, 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", {
      email: "admin@admin.com",
    });
  },
};
