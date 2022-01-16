import { Dollar } from './dollar'

describe('Dollar', () => {
  it('should return 10 when five dollar are multiplied by two', () => {
    const five: Dollar = new Dollar(5)
    let product: Dollar = five.times(2)
    expect(product.amount).toEqual(10)
    product = five.times(3)
    expect(product.amount).toEqual(15)
  })

  it('should return true when dollars of the samen value', () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy()
    expect(new Dollar(5).equals(new Dollar(6))).toBeFalsy()
  })
})
