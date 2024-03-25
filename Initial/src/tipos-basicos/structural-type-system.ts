/* eslint-disable */
type VerifyUserFn = (user: User, received: User) => boolean;
type User = { id: string; password: string | number };

const verifyUser: VerifyUserFn = (user, received) => {
  return (
    user.id === received.id && user.password === received.password
  )
}

const dataUser = { id: 'Manaure', password: 123456}
const receivedUser = { id: 'Manaure', password: 123456}
const loggedIn = verifyUser(dataUser, receivedUser)
console.log(loggedIn)
