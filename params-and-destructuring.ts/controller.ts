// Controller (name, email, password)

// Avoid pass whole data, given any new field will pass forward
function createUserControllerNotDestructuring(data) {
  usersRepository.create(data)
}

// Use destructuring to pass the exact fields that will be created
function createUserControllerDestructuring(data) {
  const { name, email, password  } = data

  usersRepository.create({
    name,
    email,
    password
  })
}
