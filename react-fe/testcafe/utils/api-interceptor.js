import { RequestLogger, RequestMock } from 'testcafe'
import { values } from 'lodash'
import chalk from 'chalk'

const apiUrlFilter = (request) => {
  return true
  // return apiUrls.some((url) => request.url.includes(url))
}
//DEMO
export const apiLogger = RequestLogger(apiUrlFilter, {
  logRequestHeaders: true,
  logResponseHeaders: true,
})

export const logApiCall = (request, response) =>
  `${response.statusCode} for ${request.method.padStart(4)} ${request.url}`

// DEMO
export const hasApiErrors = (printed = []) => apiLogger.contains((r) => {
  const { request, response, id } = r
  const hasError = response.statusCode >= 400
  if (printed.indexOf(id) < 0) {
    const apiLog = logApiCall(request, response)

    if (hasError) {
      console.error(chalk.red(` ✖ ${apiLog}`))
      console.error(request)
      console.error(response)
    } else {
      console.log(chalk.green(` ✓ ${apiLog}`))
    }
    printed.push(id)
  }

  return hasError
})

export const apiErrorMocker = RequestMock()
  .onRequestTo(apiUrlFilter)
  .respond({}, 500)
