import { snakeToCamel } from './snake-to-camel'

export const deeplyCamelize = <T, U>(obj: T): T | U | T[] | U[] => {
  if (!obj || typeof obj !== 'object') return obj
  if (obj instanceof Date || obj instanceof RegExp) return obj

  if (Array.isArray(obj)) {
    const array: U[] = []
    obj.forEach((value) => array.push(deeplyCamelize(value)))
    return array
  }

  const returns: { [key: string]: unknown } = {}

  Object.keys(obj).forEach((key) => {
    const camelCase = snakeToCamel(key)
    returns[camelCase] = deeplyCamelize((obj as unknown as { [key: string]: unknown })[key])
  }, {})

  return returns as unknown as U
}
