import { snakeToCamel } from '../snake-to-camel'

describe('snakeToCamel', () => {
  it('Convert snake_case to camelCase', () => {
    expect(snakeToCamel('snake_case')).toBe('snakeCase')
  })

  it('returned as is except for snake_case', () => {
    expect(snakeToCamel('camelCase')).toBe('camelCase')
    expect(snakeToCamel('text')).toBe('text')
    expect(snakeToCamel('text1234')).toBe('text1234')
  })
})
