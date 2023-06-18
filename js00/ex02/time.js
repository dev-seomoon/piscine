const month = { current: new Date().getMonth() }
let day = { current: new Date().getDate() }

const timeWarp = (newMonth, newDay) => {
  month.current = newMonth - 1
  day.current = newDay
}

console.log(`Today is ${month.current + 1}/${day.current}`)

timeWarp(5, 10)
console.log(`Today is ${month.current + 1}/${day.current}`)
timeWarp(11, 20)
console.log(`Today is ${month.current + 1}/${day.current}`)
