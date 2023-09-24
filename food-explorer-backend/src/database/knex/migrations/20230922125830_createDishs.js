exports.up = (knex) =>
  knex.schema.createTable("dishs", (table) => {
    table.increments("id");
    table.text("name");
    table.text("description");
    table.text("category");
    table.text("ingredients");
    table.double("price");
    table.text("image");
    table.integer("user_id").references("id").inTable("users");
  });

exports.down = (knex) => knex.schema.dropTable("dishs");
