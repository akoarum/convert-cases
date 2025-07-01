import { snakeToCamel } from './snake-to-camel'
import type { SnakeToCamel } from './snake-to-camel'

export type DeepCamelize<T> = T extends (infer U)[]
  ? DeepCamelize<U>[]
  : T extends object
  ? { [K in keyof T as SnakeToCamel<K & string>]: DeepCamelize<T[K]> }
  : T

export const deeplyCamelize = <T, U = DeepCamelize<T>>(obj: T): U => {
  if (!obj || typeof obj !== 'object') return obj as unknown as U
  if (obj instanceof Date || obj instanceof RegExp) return obj as unknown as U

  if (Array.isArray(obj)) {
    return obj.map((item) => deeplyCamelize(item)) as unknown as U
  }

  const returns: { [key: string]: unknown } = {}

  Object.keys(obj).forEach((key) => {
    const camelCase = snakeToCamel(key)
    returns[camelCase] = deeplyCamelize((obj as unknown as { [key: string]: unknown })[key])
  }, {})

  return returns as unknown as U
}
