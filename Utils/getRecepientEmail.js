
const getRecepientEmail = (users, usersLogin) =>(
    users?.filter(userToFilter =>userToFilter !==usersLogin?.email)[1]
)

export default getRecepientEmail