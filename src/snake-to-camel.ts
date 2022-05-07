export const snakeToCamel = (words: string) => {
  const snakeToUpper = (word: string) => word.charAt(1).toUpperCase()
  return words.replace(/_./g, snakeToUpper)
}
