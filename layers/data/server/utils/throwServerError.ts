export default function (error: unknown) {
   const err = error as API.Response<{}>

   throw createError({
      statusCode: err.meta.code,
      message: err.meta.message
   })
}