import { Knex } from "knex";

export async function up(knex: Knex) {
    return knex.schema.createTable('tournaments', table => {
        table.increments("id").primary();
        table.string("name").notNullable();
        table.date("date")
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable("tournaments");
}