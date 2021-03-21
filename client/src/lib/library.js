export const capitalizeWords = words => words.split(' ').map( word => word.split('').map((char, index) => index ? char : char.toUpperCase()).join('')).join(' ')


