const {addNumbers, subNumbers} = require('./index')

describe('Test for Function', () => {
    it('4 + 4 should give 8', () => {
        const result = addNumbers(4, 4)
        expect(result).toEqual(8)
    })

    it('8 -3 should give 5', () => {
        const result =  subNumbers(8, 3)
        expect(result).toEqual(5)
    })
})
