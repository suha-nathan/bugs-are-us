export const capitalizeWords = words =>
    words.trim().split(' ').map( word =>
        word.trim().split('').map((char, index) =>
            index ? char : char.toUpperCase()).join('')).join(' ')



