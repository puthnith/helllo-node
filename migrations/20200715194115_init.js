exports.up = async (knex) => {
  return knex.schema.createTable("joke", (table) => {
    table.uuid("id").primary().notNullable()
    table.string("text").notNullable()
    table.timestamp("created_at").notNullable().defaultTo(knex.fn.now())
  })
}

exports.down = async (knex) => {
  return knex.schema.dropTable("joke")
}
