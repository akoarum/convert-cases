import { camelToSnake } from '../camel-to-snake'

describe('camelToSnake', () => {
  it('Convert camelCase to snake_case', () => {
    expect(camelToSnake('camelCase')).toBe('camel_case')
  })

  it('If first letter is underscore, it should be left as it is', () => {
    expect(camelToSnake('_camelCase')).toBe('_camel_case')
  })

  it('returned as is except for camelCase', () => {
    expect(camelToSnake('snake_case')).toBe('snake_case')
    expect(camelToSnake('text')).toBe('text')
    expect(camelToSnake('text1234')).toBe('text1234')
  })
})
