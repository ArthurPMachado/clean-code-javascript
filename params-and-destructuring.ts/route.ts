// Route to create a user (name, email, password)

// Avoid pass whole body, given any new field will pass forward
function createUserRouteNotDestructuring(body) {
  createUserControllerNotDestructuring(body)
}

// Use destructuring to pass the exact fields that will be created
function createUserRouteDestructuring(body) {
  const { name, email, password  } = body

  createUserControllerDestructuring({
    name,
    email,
    password
  })
}
