export type SnakeToCamel<T extends string> = T extends `${infer B}_${infer A}`
  ? `${B}${Capitalize<SnakeToCamel<A>>}`
  : T

export const snakeToCamel = <T extends string>(words: T): SnakeToCamel<T> => {
  if (typeof words !== 'string') return words
  const targetWord = words.replace(/^_(.*?)$/, '$1')
  const snakeToUpper = (word: string) => word.charAt(1).toUpperCase()
  return `${words.charAt(0) === '_' ? '_' : ''}${targetWord.replace(/_./g, snakeToUpper)}` as SnakeToCamel<T>
}
