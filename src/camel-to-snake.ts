export const camelToSnake = (words: string) => {
  if (typeof words !== 'string') return words
  const upperToSnake = (word: string) => `_${word.charAt(0).toLowerCase()}`
  return words.replace(/[A-Z]/g, upperToSnake)
}
