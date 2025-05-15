import { BaseSchema } from '@adonisjs/lucid/schema'
import { title } from 'process'

export default class extends BaseSchema {
  protected tableName = 'events'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').references('id').inTable('users').onDelete('CASCADE').notNullable().unsigned()
      table.string('category').notNullable()
      table.string('image').notNullable()
      table.string('event_title').notNullable()
      table.string('description').notNullable()
      table.string('begin_hour').notNullable()
      table.string('end_hour')
      table.date('begin_date')
      table.date('end_date')
      table.string('location').notNullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}