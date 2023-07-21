const array = ["a", 10, "b", "hello", 122, 15];

const letters = (arr) => {
    return arr.filter((ele)=> typeof ele === 'string')
}

const numbers = (arr) => {
    return arr.filter((ele) => typeof ele === 'number')
}

const largestNumber = (arr) => {
    return Math.max(...arr.filter((ele) => typeof ele === 'number'))
}