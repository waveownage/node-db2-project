
exports.up = async function(knex) {
    await knex.schema.createTable("cars", (table) => {
        table.increments("id")
        table.text("VIN").notNull().unique()
        table.text("make").notNull()
        table.real("mileage").notNull()
        table.text("transmission type").defaultTo("unknown")
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExist("cars")
};
