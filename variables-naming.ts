const users = ['John', 'Arthur', 'Alfred']

// Wrong
const filtered = users.filter(u => {
  return u.startsWith('A')
})
// Correct
const usersStartingWithLetterA = users.filter(user => {
  return user.startsWith('A')
})

// --------------------------------------------

// Avoid generic names (data, response, list, args, params)

// Wrong
function getUsers() {
  const data = getUsersFromDatabase()

  /**
   * This wrong because it can have:
   * Validation
   * Data manipulation (mapping)
   */

  return data
}

// Correct
function getUsers() {
  const users = getUsersFromDatabase()

  return users
}

