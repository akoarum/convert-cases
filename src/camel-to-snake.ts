export const camelToSnake = (words: string) => {
  const upperToSnake = (word: string) => `_${word.charAt(0).toLowerCase()}`
  return words.replace(/[A-Z]/g, upperToSnake)
}
