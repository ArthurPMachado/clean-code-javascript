// Negation on ifs
const isUserOlderThan18Years = true
const isUserLivesOnBrazil = true

const isUserYoungerThan18Years = true
const doesUserLivesOutsideBrazil = true

// Avoid using negation on ifs
if(!isUserOlderThan18Years && !isUserLivesOnBrazil) {
  
}

// Use like this
if(isUserYoungerThan18Years && doesUserLivesOutsideBrazil) {
  
}

// -----------------------------------------------
// Early return vs else.

/**
 * Given that the returns STOP function execution, instead of writing the code
 * with else like the code below, you can write using only if, making more easy
 * to read and understand
 */
function isUserOlderThan18Years(user) {
  if(!user) {
    return { error: true}
  } else {
    return user.age >= 18
  }
}

function isUserOlderThan18Years(user) {
  if(!user) {
    return { error: true}
  }

  return user.age >= 18
}

// -------------------------------------------
// Avoid nested conditionals

// NEVER does that
user.age >= 18 ? user.age === 18 ? 'Its 18' : 'Its older than18' : 'Its newer than 18'
