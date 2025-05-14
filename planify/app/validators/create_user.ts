import vine from '@vinejs/vine'

export const createUserValidator = vine.compile(
    vine.object({
        fullname: vine.string().minLength(3).trim(),
        email: vine.string().email().maxLength(254).trim(),
        password: vine.string().minLength(8).trim().alphaNumeric()
    })
)