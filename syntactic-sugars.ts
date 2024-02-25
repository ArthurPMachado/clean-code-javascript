// Avoid syntactic sugars if it is not a issue for your productivity

const numberInString = "12373"

//const number = +numberInString
//const number = parseInt(numberInString)

const number = Number(numberInString)

//const isNumberNotNull = !!number
const isNumberNotNull = Boolean(number)

//const numberAsString = `${number}`
const numberAsString = String(number)

