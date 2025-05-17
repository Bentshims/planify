import vine from '@vinejs/vine'

export const eventValidator = vine.compile(
  vine.object({
    category: vine.string().trim().minLength(2).maxLength(50),
    eventTitle: vine.string().trim().minLength(3).maxLength(100),
    description: vine.string().trim().minLength(10).maxLength(500),
    beginHour: vine.string().maxLength(5),
    endHour: vine.string().maxLength(5),
    beginDate: vine.date({ formats: ['dd-MM-yyyy'] }),
    endDate: vine.date({ formats: ['dd-MM-yyyy'] }),
    location: vine.string().trim().maxLength(200),
  })
)
