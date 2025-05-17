import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Event extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare userId:number

  @column()
  declare category:string

  @column()
  declare image:string

  @column()
  declare eventTitle:string

  @column()
  declare description:string

  @column()
  declare beginHour:string

  @column()
  declare endHour:string

  @column()
  declare beginDate:Date

  @column()
  declare endDate:Date

  @column()
  declare location:string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}