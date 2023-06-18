const helloSomeone = (someone) => {
  if (typeof someone === 'string') {
    if (someone === '') console.log('Who are you?')
    else console.log(`Hello ${someone}!`)
  } else if (someone === null) {
    console.log('I am null and void')
  } else if (typeof someone === 'number') {
    if (isNaN(someone)) console.log('Age is just a number')
    else if (someone > 0) console.log(`My age is ${someone}`)
    else console.log(`I am Benjamin Button!`)
  } else if (typeof someone === 'undefined') {
    console.log('Nobody can define me!')
  }
}

export default helloSomeone
