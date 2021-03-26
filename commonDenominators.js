// https://www.codewars.com/kata/54d7660d2daf68c619000d95       https://github.com/vonds/JS-Code-Challenges/blob/main/commonDenominators.js
const gcd = (a, b) => b ? gcd(b, a % b) : a
const lcm = (a, b) => a * b / gcd(a, b)

const convertFrac = arr => {
  const cd = arr.reduce((a, [_, d]) => lcm(d, a), 1)
  return arr.map(([n, d]) => `(${n * cd/d},${cd})`).join('')
}