/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  // await knex("table_name").del();
  await knex("users").truncate();
  await knex("users").insert([
    {
      id: 1,
      name: "admin",
      email: "admin@email.com",
      password: "123",
      role: "admin",
    },
  ]);
};
