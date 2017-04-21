function checkUsers(validUsers) {
  return function usersIsValid(suppliedUsers) {
    return suppliedUsers.every(function (supplied) {
      return validUsers.some(function (valid) {
        return supplied === valid;
      })
    })
  }
}

module.exports = checkUsers;
