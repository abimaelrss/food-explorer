exports.up = (knex) =>
  knex.schema.createTable("dishs", (table) => {
    table.increments("id");
    table.text("name");
    table.text("description");
    table.double("price");
    table.text("image");
    table.integer("user_id").references("id").inTable("users");
    table.integer("category_id").references("id").inTable("categories");
  });

exports.down = (knex) => knex.schema.dropTable("dishs");
