// Nomenclatura de variáveis

const userCategories = [
  {
    title: 'User',
    followers: 5
  },
  {
    title: 'Friendly',
    followers: 50,
  },
  {
    title: 'Famous',
    followers: 500,
  },
  {
    title: 'Super Star',
    followers: 1000,
  },
]

export default async function getUserOnGithub(req, res) {
  const githubUsername = String(req.query.username)

  if (!githubUsername) {
    return res.status(400).json({
      message: `Please provide an username to search on the github API`
    })
  }

  const response = await fetch(`https://api.github.com/users/${githubUsername}`);

  if (response.status === 404) {
    return res.status(400).json({
      message: `User with username "${githubUsername}" not found`
    })
  }

  const user = await response.json()

  const orderFromHighestFollowersToLessFollowers = userCategories.sort(
    (userCategoryA, userCategoryB) =>  userCategoryB.followers - userCategoryA.followers
  ); 

  const getCategory = orderFromHighestFollowersToLessFollowers.find(category => user.followers > category.followers)

  const result = {
    githubUsername,
    category: getCategory.title
  }

  return result
}

getUserOnGithub({ query: {
  username: 'josepholiveira'
}}, {})
