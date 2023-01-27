export const snakeToCamel = (words: string) => {
  if (typeof words !== 'string') return words
  const targetWord = words.replace(/^_(.*?)$/, '$1')
  const snakeToUpper = (word: string) => word.charAt(1).toUpperCase()
  return `${words.charAt(0) === '_' ? '_' : ''}${targetWord.replace(/_./g, snakeToUpper)}`
}
