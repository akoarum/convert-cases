import { camelToSnake } from './camel-to-snake'

export const deeplySnakize = <T, U>(obj: T): T | U | T[] | U[] => {
  if (!obj || typeof obj !== 'object') return obj
  if (obj instanceof Date || obj instanceof RegExp) return obj

  if (Array.isArray(obj)) {
    const array: U[] = []
    obj.forEach((value) => array.push(deeplySnakize(value)))
    return array
  }

  const returns: { [key: string]: unknown } = {}

  Object.keys(obj).forEach((key) => {
    const camelCase = camelToSnake(key)
    returns[camelCase] = deeplySnakize((obj as unknown as { [key: string]: unknown })[key])
  }, {})

  return returns as unknown as U
}
