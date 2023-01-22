import math       from '../src/index.js'
import { expect } from 'chai'

describe('/src/index.js', () => {

    context('on yellow brick road', () => {
        it ('should return value', () => {
            const result = math.sum(2,2)
            expect(result).to.equal(4)
        })

        it ('should return decimal value', () => {
            const result = math.sum(2.1, 3.4)
            expect(result).to.deep.equal(5.5)
        })
    })
})