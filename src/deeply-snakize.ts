import { camelToSnake } from './camel-to-snake'
import type { CamelToSnake } from './camel-to-snake'

export type DeepSnakies<T> = T extends (infer U)[]
  ? DeepSnakies<U>[]
  : T extends object
  ? { [K in keyof T as CamelToSnake<K & string>]: DeepSnakies<T[K]> }
  : T

export const deeplySnakize = <T, U = DeepSnakies<T>>(obj: T): U => {
  if (!obj || typeof obj !== 'object') return obj as unknown as U
  if (obj instanceof Date || obj instanceof RegExp) return obj as unknown as U

  if (Array.isArray(obj)) {
    return obj.map((item) => deeplySnakize(item)) as unknown as U
  }

  const returns: { [key: string]: unknown } = {}

  Object.keys(obj).forEach((key) => {
    const camelCase = camelToSnake(key)
    returns[camelCase] = deeplySnakize((obj as unknown as { [key: string]: unknown })[key])
  }, {})

  return returns as unknown as U
}
