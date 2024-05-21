class ApiError extends Error {
  statusCode: number
  message: string
  success: boolean
  stack?: string | undefined
  error: any
  data: any | null
  errors: any

  constructor(
    statusCode: number,
    message: string = 'Something went wrong',
    errors: any[] = [],
    stack: string | undefined = ''
  ) {
    super(message)
    this.statusCode = statusCode
    this.data = null
    this.message = message
    this.success = false
    this.errors = errors

    if (stack) {
      this.stack = stack
    } else {
      Error.captureStackTrace(this, this.constructor)
    }
  }
}

class ApiResponse {
  statusCode: number
  data: any
  message: string
  success: boolean

  constructor(statusCode: number, data: any, message: string = 'Success') {
    this.statusCode = statusCode
    this.data = data
    this.message = message
    this.success = statusCode < 400
  }
}

export { ApiError, ApiResponse }
