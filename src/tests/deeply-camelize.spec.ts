import { deeplyCamelize } from '../deeply-camelize'

describe('deeplyCamelize', () => {
  it("convert all snake_case's in object to camelCase", () => {
    expect(
      deeplyCamelize({
        snake_case: 'a',
        array: [
          {
            case_1: '1',
            case_2: '2',
            case_3: '3',
          },
        ],
      })
    ).toEqual({
      snakeCase: 'a',
      array: [
        {
          case1: '1',
          case2: '2',
          case3: '3',
        },
      ],
    })
  })

  it("convert all snake_case's in array to camelCase", () => {
    expect(
      deeplyCamelize([
        {
          snake_case: 'a',
        },
        {
          array: [
            {
              case_1: '1',
              case_2: '2',
              case_3: '3',
            },
          ],
        },
      ])
    ).toEqual([
      {
        snakeCase: 'a',
      },
      {
        array: [
          {
            case1: '1',
            case2: '2',
            case3: '3',
          },
        ],
      },
    ])
  })

  it('return all but Object as is', () => {
    expect(deeplyCamelize('word')).toBe('word')
    expect(deeplyCamelize(new Date('2021-01-01'))).toEqual(new Date('2021-01-01'))
    expect(deeplyCamelize(/^.*?$/)).toEqual(/^.*?$/)
  })
})
