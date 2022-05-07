import { deeplySnakize } from '../deeply-snakize'

describe('deeplySnakize', () => {
  it("convert all camelCase's in object to snake_case", () => {
    expect(
      deeplySnakize({
        camelCase: 'a',
        array: [
          {
            camelCase1: '1',
            camelCase2: '2',
            camelCase3: '3',
          },
        ],
      })
    ).toEqual({
      camel_case: 'a',
      array: [
        {
          camel_case1: '1',
          camel_case2: '2',
          camel_case3: '3',
        },
      ],
    })
  })

  it("convert all snake_case's in array to camelCase", () => {
    expect(
      deeplySnakize([
        {
          camelCase: 'a',
        },
        {
          array: [
            {
              camelCase1: '1',
              camelCase2: '2',
              camelCase3: '3',
            },
          ],
        },
      ])
    ).toEqual([
      {
        camel_case: 'a',
      },
      {
        array: [
          {
            camel_case1: '1',
            camel_case2: '2',
            camel_case3: '3',
          },
        ],
      },
    ])
  })

  it('return all but Object as is', () => {
    expect(deeplySnakize('word')).toBe('word')
    expect(deeplySnakize(new Date('2021-01-01'))).toEqual(new Date('2021-01-01'))
    expect(deeplySnakize(/^.*?$/)).toEqual(/^.*?$/)
  })
})
