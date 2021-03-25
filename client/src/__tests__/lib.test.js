import React from 'react'
import { capitalizeWords } from "../lib/library";

describe("capitalizeWords function",() => {
    it("should return a word that is capitalized", () => {
        expect(capitalizeWords('ostrich')).toBe('Ostrich')
        expect(capitalizeWords(' free ')).toBe('Free')

    })

    it("should return a sentence that is capitalized", () => {
        expect(capitalizeWords('i know it\'s plastic love')).toBe('I Know It\'s Plastic Love')
        expect(capitalizeWords('    a whole universe is in a hot dense state  '))
            .toBe('A Whole Universe Is In A Hot Dense State')
    })

    it.todo("should remove extra whitespace between sentence")


})