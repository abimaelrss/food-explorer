/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const { hash } = require("bcryptjs");

exports.seed = async function (knex) {
  const password = "123";
  const hashedPassword = await hash(password, 8);

  // Deletes ALL existing entries
  // await knex("table_name").del();
  await knex("users").truncate();
  await knex("users").insert([
    {
      id: 1,
      name: "Administrator",
      email: "admin@email.com",
      password: `${hashedPassword}`,
      role: "admin",
    },
  ]);
};
