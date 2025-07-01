export type CamelToSnake<T extends string> = T extends `${infer A}${infer B}`
  ? B extends Uncapitalize<B>
    ? `${Lowercase<A>}${CamelToSnake<B>}`
    : `${Lowercase<A>}_${CamelToSnake<B>}`
  : T

export const camelToSnake = <T extends string>(words: T): CamelToSnake<T> => {
  if (typeof words !== 'string') return words
  const upperToSnake = (word: string) => `_${word.charAt(0).toLowerCase()}`
  return words.replace(/[A-Z]/g, upperToSnake) as CamelToSnake<T>
}
