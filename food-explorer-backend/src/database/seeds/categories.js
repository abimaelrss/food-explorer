/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  // await knex('categories').del()
  await knex('categories').truncate()
  await knex('categories').insert([
    {id: 1, name: 'Pratos principais'},
    {id: 2, name: 'Sobremesas'},
    {id: 3, name: 'Bebidas'}
  ]);
};
