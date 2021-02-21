const currentUser = (state = { username: "", password: "" }, action) => {
    switch (action.type) {
        case "UPDATE_LOGIN_FORM":
            return action.credentials
        default:
            return state;
    }
}

export default currentUser;